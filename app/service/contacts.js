'use strict';

const Service = require('../core/base-service');

class ContactsService extends Service {
  async findAll() {
    const contacts = await this.app.mysql.select('tb_contacts', {
      columns: [ 'contact_name', 'contact_tel', 'contact_region' ],
      orders: [[ 'create_time', 'desc' ]],
    });

    return contacts;
  }
}

module.exports = ContactsService;
