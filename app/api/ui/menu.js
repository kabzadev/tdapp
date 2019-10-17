module.exports = [
  {
    key: 'taxes',
    name: 'Taxes',
    icon: 'ios-paper-outline',
    child: [
      {
        key: 'filetaxes',
        name: 'File Taxes',
        link: '/app',
        icon: 'ios-document-outline',
      },
      {
        key: 'paymenthistory',
        name: 'Payment History',
        link: '/app/dashboard',
        icon: 'ios-home-outline',
      },
    ]
  },
  {
    key: 'properties',
    name: 'Properties',
    icon: 'ios-contact-outline',
    child: [
      {
        key: 'viewproperties',
        name: 'View Properties',
        link: '/app/viewproperty',
        icon: 'ios-person-outline'
      },
      {
        key: 'registerproperty',
        name: 'Register Property',
        link: '/app/registerproperty',
        icon: 'ios-key-outline'
      },
    ]
  },
  {
    key: 'Businesses',
    name: 'Businesses',
    icon: 'ios-paw-outline',
    child: [
      {
        key: 'viewbusinesses',
        name: 'View Businesses',
        link: '/app/viewbusiness',
        icon: 'ios-warning-outline'
      },
      {
        key: 'registerbusiness',
        name: 'Register Business',
        link: '/app/registerbusiness',
        icon: 'ios-warning-outline'
      },
    ]
  },
  {
    key: 'support',
    name: 'Support',
    icon: 'ios-menu-outline',
    child: [
      {
        key: 'faq',
        name: 'FAQ\'s',
        link: '/#'
      },
      {
        key: 'ticket',
        name: 'Open Ticket',
        link: '/#'
      },
      {
        key: 'email',
        name: 'Email support',
        link: '/#'
      },
    ]
  }
];
