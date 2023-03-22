export default function getFullResponseFromAPI(success) {
  return new Promise(() => {
    if (success) return { status: 200, body: 'Success' };
    throw Error('The fake API is not working currently');
  });
}
