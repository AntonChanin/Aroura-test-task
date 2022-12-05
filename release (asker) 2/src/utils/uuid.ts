const uuid = (props: { name: string, seed: number, key?: string  }) => {
  const { name, seed, key = 'key' } = props;
  return  { [`${key}`]: `${name}_key-${seed}/${Math.random() * (seed + 1)}` };
};

export default uuid;