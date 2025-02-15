const HTMLDecoderEncoder = require("html-encoder-decoder");

function SafeExplanation({ text }: { text: string }) {
  const decodedText = HTMLDecoderEncoder.decode(text);
  return <div dangerouslySetInnerHTML={{ __html: decodedText }} />
}

export default SafeExplanation;