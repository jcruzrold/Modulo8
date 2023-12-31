import * as DataBusiness from "./data-business_es6";
import * as AccountBusiness from "./account-business_es6";

function getFullName(client) {
    return client.first_name + " " + client.last_name;
}

function getClientNode(client) {
    const li = document.createElement("li");
    li.append(getFullName(client));

    return li;
}

function getClientElement(client) {
    const allAccounts = DataBusiness.getAccounts();
    const clientAccounts = [];

    for (let account of allAccounts) {
        if (account.clientId === client.id) {
            clientAccounts.push(account);
        }
    }

    const node = getClientNode(client);
    const ul = AccountBusiness.getClientAccountsElement(clientAccounts);
    node.appendChild(ul);

    return node;
}

export { getClientElement };