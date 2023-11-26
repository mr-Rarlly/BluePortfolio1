// GtmScript.js

import React from 'react';

const GtmScript = () => (
  <>
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RTE6NS3RT3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RTE6NS3RT3');
</script>
  </>
);

export default GtmScript;
