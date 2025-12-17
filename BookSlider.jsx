import Book from "./Book";

export default function BookSlider() {
  const positions = [-4, 0, 4]; // 3 books in a row

  return (
    <group>
      {positions.map((x, i) => (
        <Book key={i} position={[x, 0, 0]} />
      ))}
    </group>
  );
}
