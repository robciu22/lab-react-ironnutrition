import { Card, Col, Button } from 'antd';
// Iteration 2
function FoodBox(props) {
    // console.log("our props: ", props)
    const {name, image, calories, servings} = props.foods
  return (
    <Col>
    <Card
      title={name}
      style={{ width: 230, height: 300, margin: 10 }}
    >
      <img src={image} height={60} alt="food" />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {calories * servings} </b> kcal
      </p>
      {/* <Button onClick={()=> setFoods()}> Delete </Button> */}
      {/* <button onClick={() => setContacts(contacts._id)} className="">
        Delete
      </button> */}
    </Card>
  </Col>
  );
}
export default FoodBox;