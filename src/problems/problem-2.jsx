/**
 * Problem 2: Creating components
 *
 * Create a reusable PuzzlePiece component that receives a piece prop and renders one piece.
 * Then render all pieces using .map().
 *
 * TASKS:
 * 1. Create a function PuzzlePiece({ piece }) that returns a <div> with the piece label and background color.
 * 2. Build the pieces array (same as Problem 1).
 * 3. Render pieces in a flex container using pieces.map() and <PuzzlePiece key={piece.id} piece={piece} />.
 */

const COLORS = ["#f97316", "#22c55e", "#3b82f6", "#eab308"];

// TODO: Create PuzzlePiece component. It receives { piece } (object with id, label, color). Return a <div> with style={{ backgroundColor: piece.color }} and content {piece.label}. Add classes for size and centering (e.g. inline-flex items-center justify-center w-20 h-20 rounded-lg text-white font-bold shadow).
function PuzzlePiece({ piece }) {
  // Student Note: 
  // Returns a square PuzzlePiece with the corresponding background color and label in the center of the piece.
  return (
    <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg text-white font-bold shadow" style={{ backgroundColor: piece.color }}>
      <h1>{piece.label}</h1>
    </div>
  );
}

function Problem2() {
  // Student Note: Made a defaults object for the label and color of a puzzle piece.
  const defaults = { label: "Unknown", color: "#eee" };
  // TODO: Build `pieces` array — same as Problem 1: [0,1,2,3].map((id) => ({ id, label: `${id + 1}`, color: COLORS[id] })).
  // Student Note: pieces array for puzzle pieces.
  const pieces = [0, 1, 2, 3].map(((id) => ({ ...defaults, id: id, label: 'Piece ' + (id + 1), color: COLORS[id] })));

  return (
    <section className="problem-view p-6">
      <h2 className="text-xl font-semibold mb-2">Problem 2: Creating components</h2>
      <p className="text-gray-700 mb-4">
        Create a <code>PuzzlePiece</code> component and render all pieces using .map().
      </p>

      {/* TODO: Render a div with className "flex flex-wrap gap-3". Inside, map over pieces and render <PuzzlePiece key={piece.id} piece={piece} /> for each. */
      /* Student Note: Renders the puzzle pieces using the <PuzzlePiece/> function */}
      <div className="flex flex-wrap gap-3">
        {pieces.map((piece) => <PuzzlePiece key={piece.id} piece={piece} />)}
      </div>
    </section>
  );
}

export default Problem2;
