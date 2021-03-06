var WorkflowDesignerConstants = {
    ActivityColor: "#ECF0F1",
    ActivityTextColor: "#2D3436",
    ActivityInitialColor: "#27AE60",
    ActivityInitialTextColor: "#FFFFFF",
    ActivityFinalColor: "#2980B9",
    ActivityFinalTextColor: "#FFFFFF",
    ActivityShape: "#CECECE",
    SelectColor: "#F39C12",
    SelectTextColor: "#FFFFFF",
    SelectSubProcessColor: "#e3b015",
    SelectSubProcessTextColor: "#FFFFFF",
    ButtonActive: "#D4D8D9",
    BarColor: "#EDF1F2",
    BarSeparatorColor: "#D9DEE0",
    DeleteConfirm: "Sind Sie sicher, dass Sie ausgewählte Artikel löschen möchten?",
    DeleteConfirmCurrent: "Sind Sie sicher, dass Sie diesen Artikel löschen möchten?",
    FieldIsRequired: "Feld ist erforderlich!",
    FieldMustBeUnique: "Feld muss eindeutig sein!",
    ButtonTextDelete: "Löschen",
    ButtonTextCreate: "Erstellen",
    ButtonTextSave: "Sparen",
    ButtonTextYes: "Ja",
    ButtonTextNo: "Nein",
    ButtonTextCancel: "Stornieren",
    ButtonTextClose: "Schließen",
    ButtonTextUndo: "Rückgängig machen",
    ButtonTextRedo: "Wiederholen",
    SaveConfirm: "Änderungen speichern?",
    CloseWithoutSaving: "Schließen ohne speichern?",
    TransitionAuto: 'Auto',
    DialogConfirmText: "Frage",
    None: "Keiner",
    Warning: "Warnung",
    InfoBlockLabel: {
        Activity: "Aktivitäten:",
        Transition: "Übergänge:",
        Command: "Befehle:"
    },
    ActivityNamePrefix: "Aktivität_",
    ActivityFormLabel: {
        Title: "Aktivität",
        TitleForInline: 'Activity Inline',
        Name: "Name",
        State: "Zustand",
        IsInitial: "Initiale",
        IsFinal: "Finale",
        IsForSetState: "Für gesetzten Zustand",
        IsAutoSchemeUpdate: "Automatisches Schema-Update",
        Implementation: "Implementierung",
        PreExecutionImplementation: "Implementierung vor der Ausführung",
        ImpOrder: "Auftrag",
        ImpAction: "Aktion",
        ImpActionParameter: "Aktionsparameter",
        AlwaysConditionShouldBeSingle: "Immer Bedingung sollte Single sein",
        OtherwiseConditionShouldBeSingle: "Andernfalls sollte Bedingung einzeln sein",
        Annotations: 'Annotations',
        AnnotationName: 'Name',
        AnnotationValue: 'Value',
        Scheme: "Inline scheme"
    },
    TransitionFormLabel: {
        Title: "Übergang",
        Name: "Name",
        From: "Von der Aktivität",
        To: "Zur Aktivität",
        Classifier: "Klassifizierer",
        Restrictions: "Beschränkungen",
        RestrictionsType: "Art",
        RestrictionsActor: "Darsteller",
        Condition: "Bedingung",
        ConditionType: "Art",
        ConditionAction: "Aktion",
        ResultOnPreExecution: "Ergebnis auf PreExecution",
        Trigger: "Auslösen",
        TriggerType: "Art",
        TriggerCommand: "Befehl",
        TriggerTimer: "Timer",
        ConditionActionParameter: "Aktionsparameter",
        ConditionInversion: "Aktionsergebnis invertieren",
        ConditionsConcatenationType: "Bedingungen Verkettungstyp",
        AllowConcatenationType: "Concat erlauben als",
        RestrictConcatenationType: "Concat einschränken als",
        ConditionsListShouldNotBeEmpty: "Die Liste der Bedingungen sollte nicht leer sein",
        IsFork: "Ist Gabel",
        MergeViaSetState: "Teilprozess über gesetzten Zustand zusammenführen",
        DisableParentStateControl: "Deaktivieren Sie die übergeordnete Prozesssteuerung",
        ShowConcatParameters: "Verkettung anzeigen",
        HideConcatParameters: "Verkettung ausblenden",
        Annotations: 'Annotations',
        AnnotationName: 'Name',
        AnnotationValue: 'Value',
        InlinedFinalActivityName: "Inlined Final Activity Name"
    },
    LocalizationFormLabel: {
        Title: "Lokalisierung",
        ObjectName: "Objektname",
        Type: "Art",
        IsDefault: "IsDefault",
        Culture: "Kultur",
        Value: "Wert",
        Types: [
            "Command",
            "State",
            "Parameter"
        ]
    },
    TimerFormLabel: {
        Title: "Timer",
        Name: "Name",
        Type: "Art",
        Value: "Wert",
        Types: [
            "Command",
            "State",
            "Parameter"
        ],
        NotOverrideIfExists: "Überschreibe den Timer nicht, wenn er existiert"
    },
    ParameterFormLabel: {
        Title: "Parameter",
        Name: "Name",
        Type: "Art",
        Purpose: "Zweck",
        Value: "Wert",
        InitialValue: "Ursprünglicher Wert",
        ShowSystemParameters: "Zeige Systemparameter"
    },
    ActorFormLabel: {
        Title: "Schauspieler",
        Name: "Name",
        Rule: "Regel",
        Value: "Wert"
    },
    CommandFormLabel: {
        Title: "Befehl",
        Name: "Name",
        InputParameters: "Eingabeparameter",
        InputParametersName: "Name",
        InputParametersIsRequired: "Erforderlich",
        InputParametersParameter: "Parameter",
        InputParametersDefaultValue: "Standard"
    },
    ProcessInfoFormLabel: {
        Title: 'Additional Parameters',
        IsObsolete: "IsObsolete",
        DefiningParameters: 'Defining parameters',
        ProcessParameters: 'Process parameters',
        SystemParametersTabName: 'System Parameters',
        ProcessParametersTabName: 'Process Parameters',
        HistoryTabName: 'History',
        TimersTabName: 'Timers',
        TagsTabName: "Tags",
        HistoryTabFromLabel: 'From',
        HistoryTabFromStateLabel: 'From State',
        HistoryTabToLabel: 'To',
        HistoryTabToStateLabel: 'To State',
        HistoryTabExecutorIdLabel: 'Executor Id',
        HistoryTabActorIdLabel: 'Actor Id',
        HistoryTabTimeLabel: 'Time',
        HistoryTabTriggerNameLabel: 'Trigger Name',
        HistoryTabTransitionClassifierNameLabel: '',
        ParametersNameLabel: 'Name',
        ParametersValueLabel: 'Value',
        TimersTabNameLabel: 'Name',
        TimersTabValueLabel: 'Value',
        RootProcess: "Root Process",
        TagsLabel:'Tags (separated by commas)'
    },
    CodeActionsFormLabel: {
        Title: "Codeaktionen",
        Name: "Name",
        ActionCode: "Aktionscode",
        IsGlobal: "Ist global",
        IsAsync: "Asynchron",
        Type: "Art",
        GlobalDeleteMessage: "Sie haben die globale CodeAction gelöscht. <br/><b> Andere Schemata können diese CodeAction nicht aufrufen! </b>",
        UnGlobalMessage: "Sie haben den Status des globalen Flags geändert. <br/> Nach dem Speichern dieses Schemas wird auf der Grundlage dieser globalen CodeAction eine lokale CodeAction erstellt.",
        EditParameters: "Edit parameters",
        Parameters: "Parameters",
        Text: "Text",
        Number: "Number",
        Checkbox: "Checkbox",
        Dropdown: "Dropdown",
        DateTime: "Date/Time",
        Values: 'Values',
        DropdownName: 'Name',
        DropdownValue: 'Value',
        DropdownShouldContainValues: 'Dropdown should contain values',
        IsRequired: 'Required',
        DefaultValue: 'Default value',
        Json: 'Json'
    },
    EditParametersFormlabel: {
        Title: "Edit parameter values",
        NumberRequired: "Should be a numeric value",
        DateShouldBeInISOFormat: "Date/Time parameter should be in ISO8601 format",
        SwitchToJson: "Switch to JSON editor",
        SwitchToConstructor: "Switch to parameter values editor",
        InvalidJson: "JSON object is invalid or does not match the model"
    },
    ToolbarLabel: {
        CreateActivity: "Aktivität erstellen",
        CreateInline: 'Create inline (template)',
        CopySelected: "Ausgewählte kopieren",
        Undo: "Rückgängig machen",
        Redo: "Wiederholen",
        Move: "Bewegung",
        ZoomIn: "Hineinzoomen",
        ZoomOut: "Rauszoomen",
        ZoomPositionDefault: "Zoom Standard",
        FullScreen: "Vollbildschirm",
        Refresh: "Aktualisierung",
        AutoArrangement: "Automatische Anordnung",
        Actors: "Schauspieler",
        Commands: "Befehle",
        Parameters: "Parameter",
        Localization: "Lokalisierung",
        Timers: "Timer",
        AdditionalParameters: "Zusätzliche Parameter",
        CodeActions: "Codeaktionen",
        Info: "Erweiterte Info",
        Delete: "Löschen",
        Clone: "Klon",
        Settings: "die Einstellungen",
        CreateTransition: "Erstellen Sie einen Übergang",
        CreateActivityTransition: "Erstellen Sie eine Aktivität und einen Übergang",
        Legend: "Legende",
        ProcessInfo: "Process Info",
        Inline: "The scheme can be inlined"
    },
    ErrorActivityIsInitialCountText: "Ein Element muss als Flag Initial gekennzeichnet sein",
    ErrorActivityIsFinalCountText: "This scheme is Inlined. One or more elements must be marked flag Final",
    ErrorReadOnlySaveText: "Der Designer im ReadOnly-Modus kann nicht gespeichert werden.",
    ErrorInvalidObjectsSaveText: function (objects) {
        return "Can't save the schema. Those objects are in invalid state: " + objects;
    },
    BrokenReferencesDialogText: "This schema contains references to code actions that aren't defined by this schema or current action providers. Do you want to keep them?",
    FormMaxHeight: 700,
    EditCodeSettings: {
        Height: 600,
        Width: 1000,
        CodeHeight: 390,
        MessageBoxHeight: 400,
        MessageBoxWidth: 600,
        SuccessBoxHeight: 150,
        SuccessBoxWidth: 300
    },
    EditCodeLabel: {
        Title: "Code bearbeiten",
        EditCodeButton: "Code bearbeiten",
        Usings: "Usings",
        Compile: "Kompilieren",
        CompileSucceeded: "Kompilierung erfolgreich.",
        Success: "Erfolg",
        Error: "Error",
        OK: "OK",
        ShowUsings: "Zeigen Sie Usings",
        HideUsings: "Verbergen"
    },
    EditJSONSettings: {
        Height: 600,
        Width: 1000,
        CodeHeight: 480
    },
    EditJSONLabel: {
        Title: "Bearbeiten Sie den Wert in JSON",
        CreateEmptyType: "Erstellen",
        Format: "Format"
    },
    OverviewMap: {
        show: true,
        width: 300,
        height: 150
    },
    UndoDepth: 200,
    DefaultCulture: "de-de",
    ErrorInBrowserConsole: "See more info in the browser console."
};
