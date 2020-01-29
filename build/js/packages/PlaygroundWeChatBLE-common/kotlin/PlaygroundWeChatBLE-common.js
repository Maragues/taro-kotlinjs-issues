(function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  ToothbrushModel.prototype = Object.create(Enum.prototype);
  ToothbrushModel.prototype.constructor = ToothbrushModel;
  function ToothbrushModel(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ToothbrushModel_initFields() {
    ToothbrushModel_initFields = function () {
    };
    ToothbrushModel$CONNECT_M1_instance = new ToothbrushModel('CONNECT_M1', 0);
    ToothbrushModel$ARA_instance = new ToothbrushModel('ARA', 1);
    ToothbrushModel$CONNECT_E1_instance = new ToothbrushModel('CONNECT_E1', 2);
    ToothbrushModel$CONNECT_E2_instance = new ToothbrushModel('CONNECT_E2', 3);
    ToothbrushModel$CONNECT_B1_instance = new ToothbrushModel('CONNECT_B1', 4);
    ToothbrushModel$PLAQLESS_instance = new ToothbrushModel('PLAQLESS', 5);
  }
  var ToothbrushModel$CONNECT_M1_instance;
  function ToothbrushModel$CONNECT_M1_getInstance() {
    ToothbrushModel_initFields();
    return ToothbrushModel$CONNECT_M1_instance;
  }
  var ToothbrushModel$ARA_instance;
  function ToothbrushModel$ARA_getInstance() {
    ToothbrushModel_initFields();
    return ToothbrushModel$ARA_instance;
  }
  var ToothbrushModel$CONNECT_E1_instance;
  function ToothbrushModel$CONNECT_E1_getInstance() {
    ToothbrushModel_initFields();
    return ToothbrushModel$CONNECT_E1_instance;
  }
  var ToothbrushModel$CONNECT_E2_instance;
  function ToothbrushModel$CONNECT_E2_getInstance() {
    ToothbrushModel_initFields();
    return ToothbrushModel$CONNECT_E2_instance;
  }
  var ToothbrushModel$CONNECT_B1_instance;
  function ToothbrushModel$CONNECT_B1_getInstance() {
    ToothbrushModel_initFields();
    return ToothbrushModel$CONNECT_B1_instance;
  }
  var ToothbrushModel$PLAQLESS_instance;
  function ToothbrushModel$PLAQLESS_getInstance() {
    ToothbrushModel_initFields();
    return ToothbrushModel$PLAQLESS_instance;
  }
  ToothbrushModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToothbrushModel',
    interfaces: [Enum]
  };
  function ToothbrushModel$values() {
    return [ToothbrushModel$CONNECT_M1_getInstance(), ToothbrushModel$ARA_getInstance(), ToothbrushModel$CONNECT_E1_getInstance(), ToothbrushModel$CONNECT_E2_getInstance(), ToothbrushModel$CONNECT_B1_getInstance(), ToothbrushModel$PLAQLESS_getInstance()];
  }
  ToothbrushModel.values = ToothbrushModel$values;
  function ToothbrushModel$valueOf(name) {
    switch (name) {
      case 'CONNECT_M1':
        return ToothbrushModel$CONNECT_M1_getInstance();
      case 'ARA':
        return ToothbrushModel$ARA_getInstance();
      case 'CONNECT_E1':
        return ToothbrushModel$CONNECT_E1_getInstance();
      case 'CONNECT_E2':
        return ToothbrushModel$CONNECT_E2_getInstance();
      case 'CONNECT_B1':
        return ToothbrushModel$CONNECT_B1_getInstance();
      case 'PLAQLESS':
        return ToothbrushModel$PLAQLESS_getInstance();
      default:throwISE('No enum constant com.kolibree.blempp.ToothbrushModel.' + name);
    }
  }
  ToothbrushModel.valueOf_61zpoe$ = ToothbrushModel$valueOf;
  Object.defineProperty(ToothbrushModel, 'CONNECT_M1', {
    get: ToothbrushModel$CONNECT_M1_getInstance
  });
  Object.defineProperty(ToothbrushModel, 'ARA', {
    get: ToothbrushModel$ARA_getInstance
  });
  Object.defineProperty(ToothbrushModel, 'CONNECT_E1', {
    get: ToothbrushModel$CONNECT_E1_getInstance
  });
  Object.defineProperty(ToothbrushModel, 'CONNECT_E2', {
    get: ToothbrushModel$CONNECT_E2_getInstance
  });
  Object.defineProperty(ToothbrushModel, 'CONNECT_B1', {
    get: ToothbrushModel$CONNECT_B1_getInstance
  });
  Object.defineProperty(ToothbrushModel, 'PLAQLESS', {
    get: ToothbrushModel$PLAQLESS_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$kolibree = package$com.kolibree || (package$com.kolibree = {});
  var package$blempp = package$kolibree.blempp || (package$kolibree.blempp = {});
  package$blempp.ToothbrushModel = ToothbrushModel;
  Kotlin.defineModule('PlaygroundWeChatBLE-common', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=PlaygroundWeChatBLE-common.js.map
