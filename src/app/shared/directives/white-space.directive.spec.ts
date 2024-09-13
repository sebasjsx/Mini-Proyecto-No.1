import { Renderer2 } from '@angular/core';
import { WhiteSpaceDirective } from './white-space.directive';
Renderer2

describe('WhiteSpaceDirective', () => {
  let directive: WhiteSpaceDirective;
  let renderer: Renderer2;

  beforeEach(() => {
    // Crear un espía para Renderer2
    renderer = jasmine.createSpyObj('Renderer2', ['setStyle']);
    directive = new WhiteSpaceDirective(renderer);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
