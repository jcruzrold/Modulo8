const DataBusiness = require("./data-business_commonjs");
const ClientBusiness = require("./client-business_commonjs");

function printClientsAccounts() {
    const clients = DataBusiness.getClients();
    const ul = document.createElement("ul");

    for (let client of clients) {
        const element = ClientBusiness.getClientElement(client);
        ul.appendChild(element);
    }

    document.getElementById("root").appendChild(ul);
}

module.exports = {
    printClientsAccounts: printClientsAccounts
}