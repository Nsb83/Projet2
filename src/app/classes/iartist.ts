export class IArtist {
  displayName: string;
  id: number;
  uri: string;
  onTourUntil: string;
  identifier: [
    {
      mbid: string,
      href: string,
      eventsHref: string,
      setlistsHref: string
    }
  ]
}
//
// export interface IArtist {
//   resultsPage: {
//     results: {
//       artist: [
//         {
//           displayName: string,
//           id: number,
//           uri: string,
//           onTourUntil: string,
//           identifier: [
//             {
//               mbid: string,
//               href: string,
//               eventsHref: string,
//               setlistsHref: string
//             }
//           ]
//         }
//       ]
//     }
//   }
// }
