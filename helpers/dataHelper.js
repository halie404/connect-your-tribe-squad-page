export async function getSquadData() {
  try {
    const squadResponse = await fetch(
      'https://fdnd.directus.app/items/squad?filter={"_and":[{"cohort":"2425"},{"tribe":{"name":"FDND Jaar 1"}}]}'
    );
    const squadResponseJSON = await squadResponse.json();
    return squadResponseJSON.data;
  } catch (error) {
    console.error("Error fetching squad data:", error);
    return [];
  }
}

export async function getStudentId(request) {
  try {
    const personDetailResponse = await fetch(
      "https://fdnd.directus.app/items/person/" + request.params.id
    );
    const personDetailResponseJSON = await personDetailResponse.json();
    return personDetailResponseJSON.data;
  } catch (error) {
    console.error("Error fetching person details:", error);
    return [];
  }
}

export async function getPersonResponse() {
  try {
    const personResponse = await fetch(
      'https://fdnd.directus.app/items/person/?sort=name&fields=id,name,squads.squad_id.name,most_energy&filter={"squads":{"squad_id":{"name":"1G"}}}'
    );
    const personResponseJSON = await personResponse.json();
    return personResponseJSON.data;
  } catch (error) {
    console.error("Error fetching squad data:", error);
    return [];
  }
}
