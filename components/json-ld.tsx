/** Renders one or more schema.org objects as JSON-LD. Null entries are skipped. */
export default function JsonLd({ data }: { data: Array<object | null> | object }) {
  const items = (Array.isArray(data) ? data : [data]).filter(Boolean);
  return (
    <>
      {items.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      ))}
    </>
  );
}
