import pkg from './package.json';

function emitModulePackageFile() {
    return {
        name: 'emit-module-package-file',
        generateBundle() {
            this.emitFile({
                type: 'asset',
                fileName: 'package.json',
                source: '{"type":"module"}'
            });
        }
    };
}

export default {
    input: 'index.js',
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es', plugins: [emitModulePackageFile()] }
    ]
};
