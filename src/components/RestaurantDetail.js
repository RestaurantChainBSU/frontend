function RestaurantDetail(props) {
  return (
    <p>{props.match.params.id}</p>
  );
}

export default RestaurantDetail;
