import styled from "styled-components";

export const Master = styled.div`
  width: 850px;
  margin: 0 auto;
`;

export const LightCard = styled.div`
  background: #ffffff;
  border: solid 1px #bdbdbd;
  border-radius: 4px;
`;

export const FlexWarp = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  background: #32ddaa;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  margin: auto 15px;
  padding: 14px 25px;
  font-weight: bold;
  font-size: 16px;
  max-height: 50px;
`;

// Doesn't currently Work
// export const BetterField = styled.Field`
//   border: solid 1px #bdbdbd;
//   border-radius: 4px;
//   padding: 15px 10px;
//   font-size: 14px;
//   font-weight: bold;
//   color: #333333;
// `;

export const FormContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin: 15px;
`;

export const NewLable = styled.label`
  font-weight: bold;
  font-size: 14px;
  margin: 0px 0px 5px 0px;
  color: #333333;
`;

/* For add Child form */
export const LightCardAddChild = styled(LightCard)`
  margin: 0 auto;
  width: 50%;
`;

export const FlexWarpAddChild = styled(FlexWarp)`
  flex-wrap: wrap;
`;

export const FormContainerAddChild = styled(FormContainer)`
  margin-left: 10%;
  margin-right: 10%;
`;

export const ButtonAddChild = styled(Button)`
  margin-left: 40%;
  margin-right: 40%;
`;