import { useRef, useEffect } from "react";

import Typed from "typed.js";

export default function TypedComponent(props) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web developer",
        "Mobile developer",
        "Fullstack developer",
        "Database engineer",
        "Software engineer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}
