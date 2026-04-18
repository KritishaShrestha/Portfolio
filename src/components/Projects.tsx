import React from "react";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "OrangeHRM-MyInfo",
    category: "Quality Assurance",
    year: "2026",
    description:
      "Performed manual testing on the My Info module of OrangeHRM to validate core functionalities, data handling, and input validations.",
    image: "/orange.png",
    link: "/projects/OrangeHRM-CaseStudy",
  },
  {
    title: "Fake Review Detection System",
    category: "AI/ML",
    year: "2025",
    description:
      "Leveraging natural language processing to identify and filter out fake reviews on e-commerce platforms.",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA8PDw8QDw8PDw8NDQ0NDhAPDw4OFREWFhURFRUYHSggGBomGxUVITIhJSkrLi4uFx84ODMsNyguLisBCgoKDg0OGhAQGi0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsrLS0rLS0tLSstLS0tLSstLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgAEAwUGBwj/xABGEAACAQIBBwYMAwcDBAMAAAABAgADEQQFEiExQVFhBhMicZGhBxQVMlJigZKxwdHSFkJUI1NygqLh8CSywjNDc5MXNWP/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMBEBAAIBAgUCBAYDAAMAAAAAAAECEQMSBBMhMVEUQSIyUvAVU2GBodFCcbEFM8H/2gAMAwEAAhEDEQA/ANzPBfRpaAwEA2gG0CWgG0AwJANoEtIJaBLQDaBLQDaBLQiWgS0A2gC0KloEtCARChaBJQIEgCALQBAFoAIgCAIDWgECAwEDd08kJYZxYnaQbC/CbNrmnWn2N5Jpet70bYTnWTyVT9b3o2Qc6w+Sqfre9GyDnWTyVT9b3o2Qc6yeS6fre9G2Dm2HyXT9b3o2Qc2yeS6fre9Jsg5tk8l0/W96NsHNsnkun63vRsg5tk8l0/W96NkHNsnkun63vf2jbBzbJ5Lp+t70bYObZPJlP1vejZBzbD5Mp+t70bYObZr8dhRTYAG4IuL6xwmFow3UvuhWtIzS0CWgC0CQJaALQoEQBaAIElAIgC0AGApEAQHtAMB01jrHxhJ7Opm5wsbVgDbTo0SZXAeMDj2D6xlcJ4wvHsH1jJhPGF3HsH1jKbZMlYE2F+yMmGQkDWbSoGeu8dsZg6pnrvHbGYOqZ67x2x0XAhgdo7YQ1oEtAlpArkAEkgAaSSbADiZYjJlymXeU+BVh/qqTWBB5omtY31fswZlPD6lu0Mqa+nWOstR+McD+9b/01fpHpNXx/LL1el5/hmw/KjAvoGIVT/8AolSmO1gBMZ4bVj/FlHFaU+7a0aqVBnU3V12MjBl7RNM1mOkxhui0T2nJ7SKFoVLQBaAIEIgAiFLaUCADABEAEQFtAcQDCHpjSOsfGCezqZucKlU849ZmEs4LCpaAbQMmHHSHt+ER3Sey29MHXM5hriSeLr/hkwu6R8XX/DGDdKeLr/hkwbpFaCg3HxliDMskqIxABJNgASSTYADWSYHnvKbwlU6ZNLAqtZhoOJqX5kfwLoL9egfxCdenw0z1u57630uOGFyllV7ua1fTfp6KSHggsqdgm+b6elHTo1xS929wfgzrEA1aqpwU3YdgI75z242PaG6vDeZXh4M6f6g3/wDGfumv1s+GfpaqeL8GjjTTrK3Brg+wW+czjjY94Yzwvhz2M5PY7AtngVEI1VKTFb8M5TY9VzOiutp6nSWqdK9J6NlkfltUQhMWvOLexqoAtVf4l1N3HrmnU4OsxmnRu0+LtHS/V2+ExNOsgqUnFRG1Mp7Qdx4HTPPtWaziXoVvFozVkImLJLQoQBAEAWgAiULCgYAMAQGhBtAdNY6xBPZ1E3OFTqaz1n4zCWcFhRgG0DJhx0h7fhLDG3ZaqUw1r7N0ymGETgniw3nukwu4fFhvPdGDcniw3nujBuZQJURyACSQAASWJsABrJOwQmXjnLflg+Pc4bDEjChs2w0HFMPzN6m5fadgX0NHRjTjM93Jqak3nEdnRci/BwLLXxoNzZkw+lSOL7R1a+rVNWrrzPSrKtIjrL0anhqdJQiKoVdARAFReoCclse/VuiZ/wBMDpNMt8STm5FynNyrkr0gQQRcHQQRcEbiITLjuU/IWlXBfDjm6oHmDQrcF3dWrq1zq0uJmvfs06mjFnnmBxuIyZXIsbXtVpNcLUANj1MN+scRr7r0prVc1L30bPS8nY6niaS1qRurDUdattVhsInk3pNLbZetp6kXrmFi0wZpKBaRS2gSApgLKBChAEBhCCIDprHWISXUTe4lOprPWfjNcs4KBCmEIIEJlkoDpD2/CISZ6LVRSdRtvmcxLCJgvNN6UmJXMJzTelGJN0MqKQNJud8rGZNaDLzjwtcoTTVcn0jZqqipimBIIpX6NL+Ygk8ANjTs4bT/AM5/Zo1r+zN4KOSAsMdiFub/AOnRhtB0uRwI0cQdwMy1b5nENcRh6nYTThS5o3DsjELlMwbh2CMQuZDMG4dgjbBmUzBuHYJNsGZA0xuHYI2wuZUMVSzTo26ZzalcT0dOneZjq4zlzybXFUmqov7ZBc2Gl1A7yO8aN1tnD600t17Jq6cWh57yRyscJiOaqG1Kqwp1AToR9S1B8CdxvsE7eI0ubTMd4c/D6nLvie0vTCJ5L1gMKEoEilMAGAplgCAphQtCHgMIDINI6x8YSezqJvcKu9Akk6NJvrmGGcWQYZuHbGDdBhh24dsYY7oEYduHbGDdDJSoEEE2iISbRhZzZkwHNlDZsImbEGS1WVFZ2NlRS7HcoFyeyIjPRJnDwLJ6VMrZSzjcNiq/OG9iUp30DjmoB7Fnp2+CmIcsdZzL6DGbhqSIiHMRVRVX8qgWAM87V1OXXdMZbqV32xliwGMLdEqSbk5wtYDjOfhuJnU+GYzPlt1tGKdYkMZjipChSCGBOdazLw4GOI4qaW2xGMT/AAulobozMrVLEBlzs1gL2F7aeM6dPV313YmGm1JrOMpz43GZbzaZKl9hli2UmMHmSKeMGkdU59bvDfpKLiaHRDxzwi5HGHxJZRanVGcBsF76PYQw6s2erwupurjw4uIpicuu5K484jCUnY3dRzVQ7S6aLniRY+2efxGns1Jh38PffSJltbTQ35KRKoSgESKUiACICmUKYUsIyQCIDprHWJEns6edDhIa4Btp0SZXAjEDce6TcbZOtYbjG5Nq3QolhfUNl9szrXdGWq9ts4ZhhePdM+Ww5hvFuMvLOYni/GOWm8eY490cs3pzHHujlpvc14Sa3MZKxrenSGHtvFZ1pHuczbpafxwlrdHA+BTBB8XVrEXFKi2bwdiqi38rPN+tLCvZ7NWpB1Km4B0G2u05L0i9ZrPuzrbbOYY6GFVCStxcWIvcdcw09CmnOasralrRiQrYNXbOa56OaBewHHvk1OHpqTm3Urq2pGIZaNPNULcmwsCdc2UpsrFY9mNp3Tk0yQIAhVXGbOqc+t3btJReaZdEOI8KOEDYVKltKOVvwIzv+HfOrhLYvhq4iM1aDwZ1+jiqWxWpVR1sGU/7FmfHV+WTgp7w7Wee7gIhSmVSwAYUpgAyhDAEB4DAQHTWOsSJPZ0wnQ4UIXbm342k6HUQE9XujonVkULw7pOidWyojor1CdNezmt3YMo4koLAHpCwfYDOfitadKvSO/u2aOnF56yNDFFkL5hNgNAI6R22mWlrzfT3bZ/tL6cVttyw4LHM7EZpNzcWt0F4zTw/FzqXmuO/8Q2aujFKxOS18oFXAzSAtwym12vqtJq8ZNNSK7e3ePK00ItTOWxQkgEixOw6xO+vWMzGHNPSXGeGD/6qt/5sNf8A9om7R+ZhLnPAXb/W7/2Xz/tLrd1js9UqqxHRNpz2ifZlEx7sXN1PS7z9Jjtv5ZZqnN1PSHafpJtv5M1Tm39LvP0jFvJmvhObf0u8/SNtvK5r4Dm39Idp+kYt5M18MlNSPON5axPuxmY9mDF7Oqatb2bdJSeaHRDlvCEB4hV6x8DN/Df+yGGr8rh/Bn/1cTu5tP8AcZ08d8tf9tfBfNLvzPMeiBgKRKuSyqBkCmFAywEMAQGEBhAdNY6xIxl04nQ4i8wDp0yYMiKA4ybTcypSHGNqbpbOj5o6p1V7OW3dKtJWtnC9jcA6r/OY3063xujOCtpr2CnRVQVAsDfRffulrp1rG2Oxa0zOZCnhkUgqoBAzdF9XHfMaaOnSc1jC2va0YmQqYSmxYsty1rm5voFtG6S2hp2mZmOskal69Ilnm5g5fwnYTnsk40DWiJiL7hSqLUb+lWmzSn4oSXn3gSxoTF1qJNudonNG91Ib/arzPVhI7PZqik6jac1omezOJwxcy3pfGYbJ8st0eE5lvS+MbJ8m6PCcy3pfGNk+TfHhOZb0vjGyfK7o8GpoRra/CWtZj3SZiTmZMVXF7OqaNZu0lJ5odEOJ8KWKCYRUvpqVCbb1CkHvdZ08JXN8tWvOKud8GVDRiquwmlTHWAzN/uWbeOn5Y/2cFHzS7eee7wkCmFKRKpTABhSmUIYAgNAaA6ax1j4yMZ7OmE3uIrI1zZvjJiTMGWm3pd5jBmGakpGs3lhjMw2VLzR1Tpr2c1u4VQu02ktj3Iz7EzU9IzHFfK5t4TNT0jGK+TNvCZqekYxXyZsmam8xivkzbwSvh6VRHpv0kqK1N1O1WFiOwmWNsT0lJ3Y7PnrJtSpknKQDXL4TEGm+oc4gNr8Aykex532jdVqrPV9E03WsiVEa6Oq1EYamVhcHsM47Vy2ROE8X490w5f6st/6J4vxPZJy/1N/6ClGxvcyxTE9ybZ9mWZsSwJIKmMOkdU59bu36Sk80uiHkHhNysK2JFFTdKIzTbVnac7vuP5RPT4TTxXPlx8RfM4dNyOwHi+DpKRZ6l69QWsbvawPEKFHsnFxN9+pOPbo7eHptpH6tzOdvAwQEilaWFgsqlMgUwpTKBAIgNAenrHWJGMumE3uI0BxCMiwxlfpeaOqdNeznt3CqwGsX9klpiO8ERM9iZ6+j3CY5r4XFvKZ6+j3CM18GJ8iHX0e6WJr4MT5ZebG4TPbHhhmUCDcI2x4My8r8NHJksFylSW+aFo4xVFzm3tTrey+aeBXYDOnSt7SwtB/BNyvBUYDENYgnxZ2Ou50078TpHEkbQJhq1x1ZROXqBaaJsywBqSb12lNfhMeZC7JIcUNxmPNhly5KcUNxjnQvKkDixu75OdHhY0pVK1TON5ptabTmW6tcQ5nllyiXBUTY/t6gIpKNa+v9OPUZs0NKdS36JqX2w8u5LZKbHYnOqC9JCKuIJ1MPy0/ba3UDPQ19SNKnTv7ObR0+Zfr2eqmeO9QsKBgCRStLCwUwpTAUwpTKBAIgMDAdNY6xIk9nSib3EYSIdYGRYYy2FHzR1Tqr2c1u5yf7ysUlEBgGBIEgJWpK6sjqHR1KOjC6spFipG0ESxOEeC8vORtXJVXn6Oc2Dd/2VXSWoMToo1D3Bjr1HTr6aWi8Ylh1iXWciPCQrhcPjmzXFlTEG5zuD/d27WOjU0sdYbItl6Qjq6hlYMrC6spDKw3gjXOaYbIljqTXLOGBjNUtsMbNIyiCEwyw5nlNywoYNSqsKtfUEU3Cn1iPh22m/S0Lak/o131Iq8fyxlWpiajVqzFmJv1cBPUpSKRiHDe82nMun8H/AChp0x4rWVKee5ajWGjPZvy1OOoBt1hosL8nF6FrfHXrj2/p1cLrRX4ZegGea9AsCSKEBCZWQGUKZFLKFMAQIIDCA6ax1iRJdKJvcRxIGEIyJIkthR80dQnXXs5bd2l5V1aqoFRhmVv2LU827EkE6Dx1WmvWmYr093d/4+mna8zaOteuc9ByZicQ+FapztMMoIXOQ9EU7hs831m3slpNpplOI09GmvFYicf78+FPk3iq71mUsFWpfEuHQ3cEgHM3DSOya9K1pnr/ALdHHaWjXTia9Zj4ek/9dKc/YRwm74nk/Cln3iMXX4Us+8R8Z8LIOOuZsSYiitRGp1FV0dSjo6hldTrUg6CJYnCPJ+V3gpYFq2TTnKekcFVezLo1Uqja+pj/ADbJvrrZ7sZq4/J/KHKOS6hpXq0WBu2HrqVvp15rDSDbzrHgZbadbdSLzDr8D4WSQBXwwJ2tTYoOzpX7pz24WZ7S2xqwv/8Ayhgz/wBuoOGn6TTPCXbI1qqOL8KFL/tUGbizEd1h8ZlHBW95WeIiHLZX5d4zE3VWFJW0ZtIWvfZvPUSZ0U4Wlf1ara9p7FyPyQxOKIetnUKZ0lqoPOsNyodI6zb2yanFaenGI6yy0+HvfrPSHVZQ5F4WphxRpqKdRLtTrnpOXOvnD+YG2rZstqnHTi7xbNuseHVfhaTXEdJeb4/BVKFRqVZc110EHSCNhB2g756lLxaN1ezzrVms4ltMNy3xlKmlJSjimfPqqXdk2ITfVr069WmabcJp2mZn3bq8VqViIh6DkDLlLG0ucp9F1sKtEm7U2+YOw7eu4Hma2jbStiez0dHVrqRmO7ZzS2lMrIpgAwFMKUxAUygQCIBEB0OkdY+MJLpptcRhAcSDIsJLYUfNHVOqvZyW7tblfKvMOg5hqpzSwcaAtzYgGx0/USXvt9sunh+G5sT8cVUvxKdP+kfTr6R0/wBMw50/TLo/Do/Mj7/cfxK36R7784/ZHPn6ZPw6v5kff7p+Jn/SP75+yOdP0yfh1fzY+/3T8TP+kqe832Rz5+k/Dq/mR9/un4lf9JU98/ZHPn6T8Or+bH3+6fiV/wBJU95vsjnT9Mn4dX82Pv8AcfxK/wCjqe+32Rzp+mT8Pp+bH3+6fiR/0dT32+yOdP0yfh9PzY+/3X2w9HHUF8ZwyOrXPM4imtTNN7X6Q4XvN1LzjMdHBq6cUvNc5x7uUyx4NcmNpp06tAtcnmazWB4CpnAdQEanFXphKaUWaCr4MsKNWIxPtNE/BJr9ffxDdHCV8hR8H+DTzmr1eD1FUf0KD3zGeO1J7RENleDp75luMn5Iw2G/6FCnTIFs8DOqW/ja7Htmi+te/wA0t9NKlO0LhM1tgQOJ8J+HqNSoVEpg06bPz1QC9RL2zRfYhN78c329/A2jMxMuLjaziJiOjzoT0nnLeS8o1cLVWtRbNddBB0q67UYbQf8ANImN6VvG2zOl7UnNXrWQMuUsbSz6fRdbCtSJu1NvmDsO3rBA8XW0LaVsT28vX0daurGYbEzU3hKFMigYCmWApgCAAYDCA9M6R1iEl0wm1xmEBwZBkWRjLYUfNHUJ107OS3dr8q1MYGXxZFZM3pElc7OudHSI0Wt3zG83/wAXTw9eHmJ50zE/f6KXP5T/AHSdtL75ju1fEOjZwH1T9/snP5T/AHSdtL74zq+INnAfVP3+yc9lP90nbS+6N2r4NnAfVP3+yc9lP92nbS+6M6vg2cB9U/z/AEnPZT/dp20vujdqmzgPqn+f6Tnsqfu07aX3RnVNnAfVP8/0vZKqYws3jKoqZvRsVvnX9UnRa/dM6Tf/ACc/EV4eIjkzMz9/o2d5m5QkFLKB832/Kc+v7OjQ7y1FczldkKVQys2IwFlAkUtRQwIYBlYFWUgEEHWCNolicTmCYz0l5fyw5LnCk1qIJwzHSNZoMfyneu4+w7CfX4bieZGLd/8AryuI4flzmOzmJ1OVbyZlCphqq1qLZrro06VddqMNoP8AmkTC9K3rtszpe1JzV6tkDLdPG089Oi62FWkTdqbfNTsO3rBA8fW0Z0pxPZ7GjrRqxmO7ZTS3FMKBlCmApgCAIDCA9PWOsQT2dPNriESBxAyLIktjR80dQnVTtDkt3YsdjUoqzMRcKWCZwDNuA9sXvFIzLCbYNSxtJlzhUS1gTd16N9QOnRLF6zGcmYY8LlOlULqGUFXzFBZen6y7xe/ZMa6tbTMJFoktbKtFHSmXU52ddg65tMgfm3Xi2rWLYmUm0LQrJYNnKVOpgwseo7ZnujyyTn09Je0Rujyoc+vpL2iTdHkMrA6QQeo3lzkSBIVSyj+X2/Kc3Eezfod5aevOV2QpOZkzYjKqSBSYCkyqSqgYFWAZWBVlYXDA6CCNoliZicwTETGJeY8reTBwrGrRBbDMeJNBj+Vt67j7DpsT63DcRGpGJ7/9eTxHDzpzmOzm51OVZyblCphqi1qLZrro06VZdqMNoP8AmkTC9K3jbZnS80tuh6pkHLdPGU89Oi62FWkTdqbfNTY2PwNwPH1tGdK2J7eXs6OtGrXMd2yJmmG4pMqgTCFMKEIAMKYGEMDA3CZVQjSrA7bWI+Mz3w550pZBlOnufsX6yboTlWZUygh2N2D6yboOXKxTxanUD2D6yb4YzSW3w5uqngJ2U+WHFbvKplbJvjAQXC5rXL2u2bY9EdZt2THV0t8Q1WrlMDk0U6L0SEYtn9IjQ9/NLdXyimltpt7pFcRhgyXkXmKgfOV+gQbrYq9xpX2XEx0tDZbPdK0wXH5C52o9QMi3KlUzeixAF87rN9Ul+H3W3E06ts9FTYZugaFA0WG7ROiaxLZBfFU9HvMx2VMyniqej3n6xsqZk6UwugCw1yxGOwMqpAo5S/L7flObiPZ0aHu01czldkKdQzJkxEyqBMiwUmVQMBbwEqIGBVgGVgVZWFwykWII2iWJmJzBMRMYl5lys5NHCMatIFsMx6zRYnQrb13H2HTYn1uH4iNSMT3/AOvI4jhp05zHb/jnZ1OVZydj6mGqLWpNmuujTpVlOtWG0H/NImN6VvG23ZnS80tuh6lkHLdPGU89Oi62FWkT0qbfNTpsfmCB4+tozpWxPby9nQ166tcx38NjNLcBhSkwJeFAQgwCIDCEZFkFmkZjLGV/DSMJdHhfMXqE9DT+WHmX+aVbKOGZypGINGwtmgkBtOvQwmGpWZn5sNcqniL/AK0+833zXy5+tE8Rf9affP3xy5+sTxF/1p98/fHLn6xPEn/XH3z98vLn6xPEm/XH3j98cufrDJk6odWMY9RY/wDOI0rT/mpvJVX9XU/r++OTb6jCeSqv6up/X98cm31GGww1MoiqWLka3bWdM31jEYnqyhVyofN9vymjiPZ0cP7tLXM5XbCm5mTJivKoEwpbwBeApMKEBKqKwZWUMrAqysAQynWCNoliZicwTETGJeZ8quTjYRucpgthmOg6zRY/kbhuPsOnX6/D8RGpGJ7vH4jh505zHZz86XKsZPx1TD1Fq0mzXX2qy7VYbQf8sQDMb0reNtmdLzSd1e71HIOWExlLnFBRgc2rTJvmPa+g7RuPznja+jOlbEvZ0NaNWufHdsJqb0gLAAMBgYBEBhAyKZEWKRklJXsO0xlhLpcIegvVPQ0/lh5mp80seMyfTqkM97gWuDbReS+nF+7XMK/kSj63vf2mHp6JhPIlH1/e/tHp6GB8iUfW97+0enoYTyJR9b3o9PQwnkSj63vR6ehhnwmTqdIlkBuRm6TfRe/ymdNKtJzC4WpsVIEga3K7eb1H5Tl4j2dXDR3aSs053ZCo5lZQxmVQvClMAXgCADAEqsdamrqyMoZWBVlYXDKdYIliZicwxmsWjEvNOVHJxsI3OU7thmNlY6TSJ1I53bm9h06/W4fiI1IxPd5HEcPOlOY7NDOlyu88HeEZaVesbharItMHaKeddhwu9v5TPN468TMV8PT4CkxFref/AI6wmcL0AJgCAsBgYDAwGBgMpkGZGkRapVJGMw2eEyiyCwII3EXtM6atqxiHPfRracrYyo25ew/WZ+os1+mqYZTbcvYfrHqLfonp48j5SbcvYfrHqLHp4HyifV7D9Y9RZPTwnlE7l7DHqLHp4Tyi3q9h+seosenhPKLer2H6x6ix6eA8ot6vYfrHqLHp4A5Sb1ew/WPUWX08EbKjer2H6yc+y+mhr8TiS5uTczXa02nMuilIrGIUajyQ2QwsZVLeVS3gCAIAJgAyqEAQEqIGBVgGVgQysAVYHWCDrERMxOYSYiYxLT/hXA52fzAve+bzlQpf+HOtbhqnR6vVxjLn9Jo5zht1UAAAAACwAFgANQA2Cc8znu6YjEYhDAUwJAWAbwDeAwMBwYDBpBlV5EZVrSYTDKK8YTBxXkwYNz8JgRXgwPPwYHn4MJz8GANeDBTXjBghrRhcMTVJlELhjZoUl5QLwBeBLwpSYAlAJgCBLwBeACYC3gCALwJAUGVREiCIBBgMDAYGAwMBgZAwaDBs+RBDxgHPgHPgHPgwGfBhM+AM+AudAF5QLwoQITAF4AvKBAkAGAIAJgC8AQBeAIAlVIR//9k=",
    link: "https://github.com/pratibhaa65/fake_review_detection",
  },
  {
    title: "Inventrix",
    category: "Inventory Management System",
    year: "2024",
    description:
      "An inventory management system built to streamline stock tracking and order management for small businesses.",
    image:
      "data:image/jpeg;base64,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",
    link: "https://github.com/NimeshBabu/Inventory_Project",
  },
];

const MyWorks: React.FC = () => {
  return (
    <section
      id="my-works"
      className="min-h-max md:min-h-[100svh] xl:h-[100svh] py-20 md:py-24 bg-[#f2f2f2] dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.1]">
            Works that reflects
            <span className="italic font-light text-slate-400">
              {" "}
              precision, purpose
            </span>
            <br />
            and
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}
              quality.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`group isolate overflow-hidden rounded-[1.6rem] border shadow-[0_24px_70px_-45px_rgba(15,23,42,0.45)] transform-gpu [transform:translateZ(0)] [backface-visibility:hidden] will-change-transform transition-transform duration-500 ease-out hover:-translate-y-1
                ${
                  index === 0
                    ? "border-2 border-transparent bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 relative before:content-[''] before:absolute before:inset-0 before:rounded-[1.6rem] before:border-4 before:border-transparent before:bg-gradient-to-br before:from-primary/70 before:to-accent/70 before:opacity-80 before:z-[-1] before:pointer-events-none"
                    : "border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-900"
                }
              `}
            >
              <div className="relative h-40 md:h-36 xl:h-40 overflow-hidden rounded-t-[1.6rem] bg-slate-200 dark:bg-slate-800">
                <img
                  alt={project.title}
                  className="h-full w-full object-cover rounded-t-[1.6rem] [backface-visibility:hidden]"
                  src={project.image}
                />
                <div className="absolute inset-0 rounded-t-[1.6rem] bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  <span style={{ color: "black" }}>{project.year}</span>
                </span>
              </div>

              <div className="p-5 md:p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="inline-flex rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600 dark:text-slate-300">
                    {project.category}
                  </p>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${index === 0 ? "text-slate-700 dark:text-slate-200" : "text-slate-400 dark:text-slate-500"}`}
                  >
                    {index === 0 ? "Highlight" : "Featured"}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-primary leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 min-h-[3.75rem]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-3 sm:mt-1 flex items-center justify-center sm:justify-end">
                  {index === 0 ? (
                    <Link
                      to={project.link}
                      className="inline-flex justify-center w-full sm:w-auto items-center rounded-full bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 px-6 py-3 sm:px-4 sm:py-2 text-[12px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20"
                    >
                      View Case Study
                    </Link>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center w-full sm:w-auto items-center rounded-full bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 px-6 py-3 sm:px-4 sm:py-2 text-[12px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
