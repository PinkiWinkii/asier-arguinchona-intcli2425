module.exports = {
  presets: [
    '@babel/preset-env', // Para compatibilidad con ECMAScript moderno
    '@babel/preset-typescript', // Para soporte de TypeScript
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs', // Para convertir módulos ECMAScript a CommonJS si usas módulos ES
  ],
};
