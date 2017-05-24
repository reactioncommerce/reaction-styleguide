// function hasServices() {
//   return Array.isArray(Meteor.settings.services);
// }
//
// /**
//  * Configre github API and other services
//  * @return {[type]} [description]
//  */
// export function initServiceConfiguration() {
//   // Import settinngs typically found in a Meteor settings file
//   // settings file location <app-root>/settings/settings.json
//   // or meteor --settings=path/to/settings.json
//   if (hasServices()) {
//     // Loop through the array of service objects
//     for (const serviceObject of Meteor.settings.services) {
//       for (const service in serviceObject) {
//         // Validate that the properties we're trying to access, actually belong
//         // to the service, and not a prototype
//         if ({}.hasOwnProperty.call(serviceObject, service)) {
//           const settings = serviceObject[service];
//
//           // Add the setting to the service configuration collection
//           ServiceConfiguration.configurations.upsert({
//             service
//           }, {
//             $set: settings
//           });
//
//           // If we have github credentials we'll also create an auth param string for api requests
//           if (service === "github") {
//             authString = `?client_id=${settings.clientId}&client_secret=${settings.secret}`;
//           }
//         }
//       }
//     }
//   }
// }
//
//
//
// /**
//  * Get Repo Stargazers
//  * @return {number} Stargazers count
//  */
// export function getStargazers() {
//   const apiUrl = "https://api.github.com/repos/reactioncommerce/reaction";
//
//   // get repo urls ands stats
//   remoteRepoData = Meteor.http.get(apiUrl + authString, {
//     headers: {
//       "User-Agent": "ReDoc/1.0"
//     }
//   });
//
//   return remoteRepoData.data.stargazers_count;
// }
