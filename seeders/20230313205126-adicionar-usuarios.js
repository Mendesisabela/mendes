'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('usuarios', [

      {nome: 'Isabela Mendes'},
      {nome: 'Karen Decleva'},
      {nome: 'Isabel Gualberto'},
      {nome: 'Vitoria Medeiros'},
      {nome: 'Gabriel Diniz'}

    ], {});
  },

  async down (queryInterface, Sequelize) {
   /* await queryInterface.bulkDelete('usuarios', null, {}); */ 
  }
};
