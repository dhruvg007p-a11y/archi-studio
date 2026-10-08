export default function PageHead({title,note}){
  return <section className="bg-ink px-6 pb-20 pt-40 text-center text-cream">
    <p className="note fade-up">{note}</p><h1 className="h2 fade-up mt-3" style={{animationDelay:'.15s'}}>{title}</h1></section>;
}
