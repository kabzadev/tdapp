import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';

class ViewBusiness extends React.Component {
  render() {
    const title = brand.name + ' - View Business Page';
    const description = brand.desc;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="View Businesses" desc="Here are your recurrent gistered businesses.">
          Content
        </PapperBlock>
      </div>
    );
  }
}

export default ViewBusiness;
