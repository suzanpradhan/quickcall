class DIContainer {
  private container: Map<string, any> = new Map();

  register<T>(name: string, value: T): void {
    this.container.set(name, value);
  }

  get<T>(name: string): T {
    if (!this.container.has(name)) {
      throw new Error(`Dependency not found: ${name}`);
    }
    return this.container.get(name);
  }
}

const container = new DIContainer();
export { container };
