/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
// import vue
import VsfSideSheetVue from "../../../sfui/frameworks/vue/components/VsfSideSheet/VsfSideSheet.vue";
// end import vue
// import react
import VsfSideSheetReact from "../../../sfui/frameworks/react/components/VsfSideSheet/VsfSideSheet";
// end import react

import { mount } from '../../utils/mount';
import VsfSideSheetBaseObject from "./VsfSideSheet.PageObject";

describe("VsfSideSheet", () => {
  let permanent: boolean;
  let leftSide: boolean;
  let overlayVisible: boolean;
  let open: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;

  const page = () => new VsfSideSheetBaseObject('side-sheet');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfSideSheetVue,
        props: {
          permanent,
          leftSide,
          overlayVisible,
          open,
          onClose: onChangeSpy,
        },
      },
      react:
        <VsfSideSheetReact
          permanent={permanent}
          leftSide={leftSide}
          overlayVisible={overlayVisible}
          open={open}
          onOpenChange={onChangeSpy}
        > </VsfSideSheetReact>
    });
  }

  beforeEach(() => {
    cy.viewport(300, 300);
    onChangeSpy = cy.spy();
    open = true;
    permanent = false;
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop permanent is set to true', () => {
    before(() => {permanent = true});
    after(() => {permanent = false});
    it('should render without close button and without additional fixed class', () => {
      initializeComponent();

      page()
        .isPermanent()
        .makeSnapshot();
    })
  })

  describe('when prop leftSide is false', () => {
    before(() => {leftSide = false});
    after(() => {leftSide = true});
    it('should render with class for right side', () => {
      initializeComponent();

      page()
        .isOnRightSide()
        .makeSnapshot()

    })
  })

  describe('when prop overlayVisible is true', () => {
    before(() => {overlayVisible = true});
    after(() => {overlayVisible = false});
    it('should render with overlay', () => {
      initializeComponent();

      page()
        .hasOverlay()
        .makeSnapshot()

    })
  })

  describe('when close button is clicked', () => {
    it('should response on click', () => {
      initializeComponent();

      page()
        .hasCloseButton()
        .closeButtonIsClicked()
      cy.then(() => {
        expect(onChangeSpy).calledOnceWith();
        page().makeSnapshot()
      })
    })
  })
});