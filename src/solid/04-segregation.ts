
interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): number;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swin(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly(): number { return 100; }
  public eat(): void {}
}

class Humminbird implements Bird, FlyingBird {
  public fly(): number { return 200; }
  public eat(): void {}
}

class Ostrich implements Bird, RunningBird {
  public eat(): void {}
  public run(): void {}
}

class Penguin implements Bird, SwimmerBird {
  public eat(): void {}
  public swin(): void {}
}

/**
 * Deteccion de violaciones
 * 
 * Si las interfaces que diseñamos nos obligan a violar los principios
 * de responsabilidad unica y substitucion de Liskov.
 * 
 */