const Test: React.FC<{ weight: string; time: string; name: string }> = ({
  weight,
  time,
  name,
}) => {
  const f = parseFloat(weight) * parseFloat(time);
  // Use the weight and time props in this component
  return (
    <div>
      {/* <p>Weight: {weight}</p>
      <p>Time: {time}</p>
      <p>Name: {name}</p> */}
      <p>f = {f}</p>
    </div>
  );
};

export default Test;
