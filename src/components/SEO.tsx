import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  schema?: any[];
}

export default function SEO({ title, description, name = 'Digitalonix', type = 'website', schema }: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      {/* End standard metadata tags */}
      
      {/* Facebook tags */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {/* End Facebook tags */}
      
      {/* Twitter tags */}
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {/* End Twitter tags */}
      
      {schema && schema.map((s, idx) => (
        <script type="application/ld+json" key={idx}>
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
