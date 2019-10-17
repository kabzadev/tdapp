import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import CompossedLineBarArea from './CompossedLineBarArea';
import StrippedTable from '../Table/StrippedTable';

class BasicTable extends Component {
  render() {
    const title = brand.name + ' - Dashboard';
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
        <PapperBlock title="Statistic Chart" icon="ios-stats-outline" desc="" overflowX>
          <div>
            <CompossedLineBarArea />
          </div>
        </PapperBlock>
        <PapperBlock title="Table" whiteBg icon="ios-menu-outline" desc="UI Table when no data to be shown">
          <div>
            <StrippedTable />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default BasicTable;
