'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
       await queryInterface.bulkInsert('pessoas', [

        {nome: 'Isabela', sobrenome: 'Mendes', idade:17, altura:'2,00'},
        {nome: 'Karen', sobrenome: 'Decleva', idade:16, altura:'1,70'},
        {nome: 'Isabel', sobrenome: 'Gualberto', idade:17, altura:'1,20'},
        {nome: 'Vitoria', sobrenome: 'Medeiros', idade:16, altura:'1,40'},
        {nome: 'Gabriel', sobrenome: 'Diniz', idade:16, altura:'1,60'}

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
