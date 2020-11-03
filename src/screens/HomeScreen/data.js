// url: https://www.ikea.com/us/en/cat/chairs-fu002/
// script
/*
let data = [];
let elms = document.getElementsByClassName('product-compact')
for(var i=0; i < elms.length; i++) {
    const curr = elms[i];
    const price = curr.getElementsByClassName('product-compact__price__value')[0].innerText;
    const name = curr.getElementsByClassName('product-compact__name')[0].innerText;
    const image = curr.getElementsByTagName('img')[0].src;
    data.push({
      id: curr.dataset.refId,
      price,
      name,
      image
    })
}
JSON.stringify(data, null, 2)
*/
export default [
    {
      id: '40454230',
      price: 'Placeholder',
      name: 'Hacker Dojo',
      image:
        'https://www.ikea.com/us/en/images/products/bingsta-armchair__0793271_PE765307_S5.JPG?f=xs'
        // 'https://venngage.com/templates/logos/golf-club-creative-logo-0de507c7-5f23-42c7-9bdd-0d206ef3531a'
    },
    {
      id: '70078463',
      price: 'Placeholder',
      name: 'HandsOn',
      image:
        'https://www.ikea.com/us/en/images/products/pello-armchair__38296_PE130209_S5.JPG?f=xs'
    },
    {
      id: '99305926',
      price: 'Placeholder',
      name: 'La Casa de las Madres',
      image:
        'https://www.ikea.com/us/en/images/products/poaeng-armchair__0497130_PE628957_S5.JPG?f=xs'
    },
    {
      id: '99305926',
      price: 'Placeholder',
      name: 'Aspire',
      image:
        'https://www.ikea.com/us/en/images/products/poaeng-armchair__0497130_PE628957_S5.JPG?f=xs'
    },
    {
      id: '99305926',
      price: 'Placeholder',
      name: 'STAND!',
      image:
        'https://www.ikea.com/us/en/images/products/poaeng-armchair__0497130_PE628957_S5.JPG?f=xs'
    },
    {
      id: '99305926',
      price: 'Filipino Community Center',
      name: 'Bayanihan',
      image:
        'https://www.ikea.com/us/en/images/products/poaeng-armchair__0497130_PE628957_S5.JPG?f=xs'
    },
    {
      id: '90359829',
      price: '$249.00',
      name: 'STRANDMON',
      image:
        'https://www.ikea.com/us/en/images/products/strandmon-wing-chair__0325432_PE517964_S5.JPG?f=xs'
    }
  ];