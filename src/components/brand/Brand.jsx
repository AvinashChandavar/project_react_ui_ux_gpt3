import React from 'react';
import './Brand.css';
import * as imports from './imports';

const Brand = () => {
  const brands = Object.values(imports);

  return (
    <div className="gpt3__brand section__padding">
      {brands.map((brand, index) => (
        <div key={index}>
          <img src={brand} alt={brand} />
        </div>
      ))}
    </div>
  );
};

export default Brand;

// import React from 'react';
// import './Brand.css';

// import { google, slack, atlassian, dropbox, shopify } from './imports';

// const Brand = () => {
//   return (
//     <div className="gpt3__brand section__padding">
//       <div>
//         <img src={google} alt={google} />
//       </div>
//       <div>
//         <img src={slack} alt={'slack'} />
//       </div>
//       <div>
//         <img src={atlassian} alt={'atlassian'} />
//       </div>
//       <div>
//         <img src={dropbox} alt={'dropbox'} />
//       </div>
//       <div>
//         <img src={shopify} alt={'shopify'} />
//       </div>
//     </div>
//   );
// };

// export default Brand;
