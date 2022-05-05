import React from "react";

import Rows from "./common/components/Rows";

import { Colors } from "./common/constants";

import {
  Container,
  ContainerHeader,
  Heading2,
  ContentBlock,
  Footer,
  Heading1,
  Space,
} from "./common/styled";

import { Accounts } from "./Providers/accounts";

class App extends React.Component {
  rows = [];
  accounts = [];

  state = {
    accounts: [],
  };

  populateRows = () => {
    let items = [];
    let accounts = this.state.accounts;
    let sum = 0;
    let temp = 0;

    items.push(
      <Rows
        key={0}
        isHeader={true}
        color={Colors.White}
        accountNumber={"Account Number"}
        accountType={"Account Type"}
        accountBalance={"Balance"}
      />
    );

    for (let i = 0; i < accounts.length; i++) {
      let remaining = parseFloat(accounts[i].balance);
      sum += remaining;
      temp = remaining * -1;
      let balance =
        remaining < 0
          ? `-ZAR ${temp.toFixed(2)}`
          : `ZAR ${remaining.toFixed(2)}`;

      items.push(
        <Rows
          key={i + 1}
          isHeader={false}
          title={`item${i}`}
          color={i % 2 === 0 ? Colors.AntiFlashWhite : Colors.White}
          accountNumber={accounts[i].account_number}
          accountType={accounts[i].account_type}
          accountBalance={balance}
          accountNumericalBalance={parseFloat(remaining).toFixed(2)}
          isDepleted={this.isInsufficient(
            accounts[i].account_type,
            parseFloat(remaining).toFixed(2)
          )}
        />
      );
    }

    this.setState({ rows: items, sum: this.getTotal(sum) });
  };

  populateAccounts = async () => {
    this.accounts = await Accounts.getAccountList();

    this.setState({ accounts: this.accounts.data }, () => {
      this.populateRows();
    });
  };

  isInsufficient = (accountType, accountNumericalBalance) => {
    if (accountType === "cheque" && accountNumericalBalance < -499) {
      return true;
    }
    if (accountType === "savings" && accountNumericalBalance < -19) {
      return true;
    }

    return false;
  };

  getTotal = (sum) => {
    let temp = sum * -1;
    let balance = sum < 0 ? `-ZAR ${temp.toFixed(2)}` : `ZAR ${sum.toFixed(2)}`;

    let i = balance[0] === "-" ? 8 : 7;
    let step = 3;
    let slice = balance[0] === "-" ? 6 : 5;
    let sub = 3;
    sub += balance.length > 25 ? 1 : 0;
    sub += balance.length > 27 ? 1 : 0;

    while (i++ < balance.length - sub) {
      if (step === 3) {
        balance = balance.slice(0, slice) + "," + balance.slice(slice);
        step = 0;
        slice += 4;
      }
      step++;
    }

    return balance;
  };

  componentDidMount = async () => {
    this.populateAccounts();
  };

  render() {
    return (
      <Container>
        <ContainerHeader>
          <Heading2 paddingLeft={"40px"} paddingTop={"10px"}>
            Acme Banks
          </Heading2>
        </ContainerHeader>
        <ContentBlock>
          <Space height={".5vh"} />
          <Heading1 color={Colors.CrimsonGlory} paddingLeft={"20px"}>
            Account List
          </Heading1>
          <Space height={".5vh"} width={".1vh"} />
          {this.state.rows}
          <Footer>
            <Heading2 color={Colors.Black}>Balance</Heading2>

            <Heading2 color={Colors.Black} paddingLeft={"20px"}>
              {this.state.sum}
            </Heading2>
          </Footer>
        </ContentBlock>
      </Container>
    );
  }
}

export default App;
