import { Label } from '../Label/Label';

export const Contacts = ({ email, phone }) => {
  return (
    <div className="">
      <Label color="choco" >Контакты</Label>
      <div className="">Почта: {email}</div>
      <div className="">Телефон: {phone}</div>
    </div>
  );
};
