import React from 'react';

import DocMain from 'src/views/Documentation/components/DocMain';

import AccordionDoc from './components/AccordionDoc';
import AlertDoc from './components/AlertDoc';
import BadgeDoc from './components/BadgeDoc';
import ButtonsDoc from './components/ButtonsDoc';
import ButtonGroupDoc from './components/ButtonGroupDoc';
import BreadcrumbsDoc from './components/BreadcrumbsDoc';
import CardDoc from './components/CardDoc';
import ChecksDoc from './components/ChecksDoc';
import CloseButton from './components/CloseButton';
import CollapseDoc from './components/CollapseDoc';
import DropdownDoc from './components/DropdownDoc';
import FormControlDoc from './components/FormControlDoc';
import FormLayoutDoc from './components/FormLayoutDoc';
import FormValidation from './components/FormValidationDoc';
import FloatingLabelsDoc from './components/FloatingLabelsDoc';
import InputGroupDoc from './components/InputGroupDoc';
import ListGroupDoc from './components/ListGroupDoc';
import ModalDoc from './components/ModalDoc';
import NavbarDoc from './components/NavbarDoc';
import NavsDoc from './components/NavsDoc';
import PaginationDoc from './components/PaginationDoc';
import ProgressDoc from './components/ProgressDoc';
import PopoversDoc from './components/PopoversDoc';
import RadiosDoc from './components/RadiosDoc';
import RangeDoc from './components/RangeDoc';
import ScrollspyDoc from './components/ScrollspyDoc';
import SelectDoc from './components/SelectDoc';
import SpinnersDoc from './components/SpinnersDoc';
import SwitchesDoc from './components/SwitchesDoc';
import TabsDoc from './components/TabsDoc';
import ToastDoc from './components/ToastDoc';
import TooltipDoc from './components/TooltipDoc';

const Bootstrap = () => {
  const list = [
    'accordion',
    'alert',
    'badge',
    'buttons',
    'buttonGroup',
    'breadcrumbs',
    'card',
    'checks',
    'closeButton',
    'collapse',
    'dropdown',
    'formControls',
    'formLayout',
    'formValidation',
    'floatingLabels',
    'inputGroup',
    'listGroup',
    'modal',
    'navbar',
    'navs',
    'pagination',
    'popovers',
    'progress',
    'radios',
    'range',
    'scrollspy',
    'select',
    'spinners',
    'switch',
    'tabs',
    'toast',
    'tooltip',
  ];

  return (
    <DocMain list={list}>
      <AccordionDoc />
      <AlertDoc />
      <BadgeDoc />
      <ButtonsDoc />
      <ButtonGroupDoc />
      <BreadcrumbsDoc />
      <CardDoc />
      <ChecksDoc />
      <CloseButton />
      <CollapseDoc />
      <DropdownDoc />
      <FormControlDoc />
      <FormLayoutDoc />
      <FormValidation />
      <FloatingLabelsDoc />
      <InputGroupDoc />
      <ListGroupDoc />
      <ModalDoc />
      <NavbarDoc />
      <NavsDoc />
      <PaginationDoc />
      <PopoversDoc />
      <ProgressDoc />
      <RadiosDoc />
      <RangeDoc />
      <ScrollspyDoc />
      <SelectDoc />
      <SpinnersDoc />
      <SwitchesDoc />
      <TabsDoc />
      <ToastDoc />
      <TooltipDoc />
    </DocMain>
  );
};

export default Bootstrap;
