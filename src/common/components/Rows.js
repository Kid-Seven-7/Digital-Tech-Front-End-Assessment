import React, { Fragment } from "react";
import { RowStyle, Text, TextDiv, Button } from "../styled";

function triggerAlert(props) {
  if (props.isDepleted) {
    return;
  }

  if (
    (props.accountType === "cheque" && props.accountNumericalBalance > -500) ||
    (props.accountType === "savings" && props.accountNumericalBalance > -20)
  ) {
    alert("Success");
  } else {
    alert("Insufficient Funds");
  }
}

export default function Rows(props) {
  return (
    <RowStyle color={props.color} isHeader={props.isHeader}>
      <TextDiv>
        {props.accountNumericalBalance && (
          <Fragment>
            <Text>{props.accountNumber}</Text>

            <Text>{props.accountType}</Text>

            <Text>{props.accountBalance}</Text>
          </Fragment>
        )}
        {!props.accountNumericalBalance && (
          <Fragment>
            <Text size="21px" weight="bolder">
              {props.accountNumber}
            </Text>

            <Text size="21px" weight="bolder">
              {props.accountType}
            </Text>

            <Text size="21px" weight="bolder">
              {props.accountBalance}
            </Text>
          </Fragment>
        )}
      </TextDiv>

      {props.accountNumericalBalance && (
        <Button
          enabled={props.isDepleted}
          onClick={() => {
            triggerAlert(props);
          }}
        >
          Withdraw
        </Button>
      )}
    </RowStyle>
  );
}
