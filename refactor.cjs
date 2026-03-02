const fs = require('fs');
const path = require('path');

const routes = [
    { file: 'index', path: '/' },
    { file: 'catalogo', path: '/catalogo' },
    { file: 'promociones', path: '/promociones' },
    { file: 'nosotros', path: '/nosotros' },
    { file: 'blog', path: '/blog' },
    { file: 'contacto', path: '/contacto' },
    { file: 'admin', path: '/admin' },
    { file: 'login', path: '/login' },
    { file: 'servicios', path: '/servicios' },
];

for (let r of routes) {
    const p = path.join('src/routes', r.file + '.tsx');
    if (!fs.existsSync(p)) continue;

    let content = fs.readFileSync(p, 'utf-8');
    let match = content.match(/component:\s*([A-Za-z0-9_]+),?/);
    if (!match) continue;
    let compName = match[1];

    let pageContent = content.replace(/export const Route = createFileRoute[^)]*\)\(\{[^}]*\}\)/s, '');

    let importMatch = pageContent.match(/import\s*\{([^}]+)\}\s*from\s*['"]@tanstack\/react-router['"]/);
    if (importMatch) {
        let imports = importMatch[1].split(',').map(s => s.trim()).filter(s => s !== 'createFileRoute');
        if (imports.length > 0) {
            pageContent = pageContent.replace(importMatch[0], `import { ${imports.join(', ')} } from '@tanstack/react-router'`);
        } else {
            // Si está vacío o solo quedan comas borrar la línea por regex más sencilla o dejar el import en un string para reeemplazar
            pageContent = pageContent.replace(importMatch[0] + '\n', '');
        }
    }

    pageContent = pageContent.trim();

    if (!pageContent.includes(`export default function ${compName}`)) {
        pageContent = pageContent.replace(`function ${compName}`, `export default function ${compName}`);
    }

    const pageFile = path.join('src/pages', r.file + 'Page.tsx');
    fs.writeFileSync(pageFile, pageContent);

    const routeContent = `import { createFileRoute } from '@tanstack/react-router'\nimport ${compName} from '../pages/${r.file}Page'\n\nexport const Route = createFileRoute('${r.path}')({\n  component: ${compName},\n})\n`;
    fs.writeFileSync(p, routeContent);
}
console.log('Refactor complete.');
