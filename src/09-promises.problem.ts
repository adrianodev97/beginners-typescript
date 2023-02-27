interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> /*01*/ => {
  const data: LukeSkywalker /*02*/ = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data as LukeSkywalker; /*03*/
};
