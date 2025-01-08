// Exaxmples of usage:
//* 1. In a background image: <div style={{backgroundImage: `url('${toAbsoluteUrl('/media/misc/pattern-1.jpg')}')`}}>...
//* 2. In img tag: <img src={toAbsoluteUrl('/media/avatars/300-2.jpg')} />
// /media/avatars/300-25.png'
const toAbsoluteUrl = (pathname: string): string => '/core'+pathname;

export { toAbsoluteUrl };
