const TypewriterAnimation = ({ phrases, speed }: any) => {
    const [text, setText] = useState("");
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const currentPhrase = phrases[currentPhraseIndex];
  
    useEffect(() => {
      let i = 0;
      const type = () => {
        if (i < currentPhrase.length) {
          setText((prev) => prev + currentPhrase.charAt(i));
          i++;
          setTimeout(type, speed);
        } else {
          setTimeout(() => {
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            setText("");
            i = 0;
          }, 2000); // wait 2 seconds before starting the next phrase
        }
      };
      type();
    }, [currentPhrase, phrases, speed]);
  
    return (
      <div>
        <h1 className="lg:text-4xl text-lg text-center font-bold">{text}</h1>
      </div>
    );
  };
  
  export default TypewriterAnimation;