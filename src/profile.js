var React = require('react');
var {Button, Checkbox, FormControl, InputGroup} = require('react-bootstrap');
var intl = require('./translate.js');
const GlobalConst = require('./global_const.js');
var TextWithTooltip = GlobalConst.TextWithTooltip;
var Typeahead = require('./typeahead').Typeahead;
var CreateClass = require('create-react-class');
var {CriticalBuffList} = require('./components.js');

// const
var zenith = GlobalConst.zenith;
var zenithDA = GlobalConst.zenithDA;
var zenithTA = GlobalConst.zenithTA;
//var zenithCritical = GlobalConst.zenithCritical;
var zenithOugiDamage = GlobalConst.zenithOugiDamage;
var zenithChainDamage = GlobalConst.zenithChainDamage;
var zenithChainDamageLimit = GlobalConst.zenithChainDamageLimit;
var zenithElement = GlobalConst.zenithElement;
var zenithDamageLimit = GlobalConst.zenithDamageLimit;
var Jobs = GlobalConst.Jobs;
var jobTypes = GlobalConst.jobTypes;
var armTypes = GlobalConst.armTypes;
var selector = GlobalConst.selector;

var Profile = CreateClass({
    getDefaultProps() {
        var zenithBonuses = {"ja": {}, "en": {}, "zh": {}};
        zenithBonuses.ja = Object.keys(zenith).map(function (opt) {
            return <option value={opt} key={opt}>{opt}</option>
        });
        zenithBonuses.en = Object.keys(zenith).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "en")}</option>
        });
        zenithBonuses.zh = Object.keys(zenith).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "zh")}</option>
        });

        var zenithDABonuses = {"ja": {}, "en": {}, "zh": {}};
        zenithDABonuses.ja = Object.keys(zenithDA).map(function (opt) {
            return <option value={opt} key={opt}>{opt}</option>
        });
        zenithDABonuses.en = Object.keys(zenithDA).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "en")}</option>
        });
        zenithDABonuses.zh = Object.keys(zenithDA).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "zh")}</option>
        });

        var zenithTABonuses = {"ja": {}, "en": {}, "zh": {}};
        zenithTABonuses.ja = Object.keys(zenithTA).map(function (opt) {
            return <option value={opt} key={opt}>{opt}</option>
        });
        zenithTABonuses.en = Object.keys(zenithTA).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "en")}</option>
        });
        zenithTABonuses.zh = Object.keys(zenithTA).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "zh")}</option>
        });

        //var zenithCriticalBonuses = {"ja": {}, "en": {}, "zh": {}};
        //zenithCriticalBonus.ja = Object.keys(zenithCritical).map(function (opt) {
        //    return <option value={opt} key={opt}>{opt}</option>
        //});
        //zenithCriticalBonuses.en = Object.keys(zenithCritical).map(function (opt) {
        //    return <option value={opt} key={opt}>{intl.translate(opt, "en")}</option>
        //});
        //zenithCriticalBonuses.zh = Object.keys(zenithCritical).map(function (opt) {
        //    return <option value={opt} key={opt}>{intl.translate(opt, "zh")}</option>
        //});

        var zenithOugiDamageBonuses = {"ja": {}, "en": {}, "zh": {}};
        zenithOugiDamageBonuses.ja = Object.keys(zenithOugiDamage).map(function (opt) {
            return <option value={opt} key={opt}>{opt}</option>
        });
        zenithOugiDamageBonuses.en = Object.keys(zenithOugiDamage).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "en")}</option>
        });
        zenithOugiDamageBonuses.zh = Object.keys(zenithOugiDamage).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "zh")}</option>
        });

        var zenithChainDamageBonuses = {"ja": {}, "en": {}, "zh": {}};
        zenithChainDamageBonuses.ja = Object.keys(zenithChainDamage).map(function (opt) {
            return <option value={opt} key={opt}>{opt}</option>
        });
        zenithChainDamageBonuses.en = Object.keys(zenithChainDamage).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "en")}</option>
        });
        zenithChainDamageBonuses.zh = Object.keys(zenithChainDamage).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "zh")}</option>
        });

        var zenithChainDamageLimitBonuses = {"ja": {}, "en": {}, "zh": {}};
        zenithChainDamageLimitBonuses.ja = Object.keys(zenithChainDamageLimit).map(function (opt) {
            return <option value={opt} key={opt}>{opt}</option>
        });
        zenithChainDamageLimitBonuses.en = Object.keys(zenithChainDamageLimit).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "en")}</option>
        });
        zenithChainDamageLimitBonuses.zh = Object.keys(zenithChainDamageLimit).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "zh")}</option>
        });

        var zenithElementBonuses = {"ja": {}, "en": {}, "zh": {}};
        zenithElementBonuses.ja = Object.keys(zenithElement).map(function (opt) {
            return <option value={opt} key={opt}>{opt}</option>
        });
        zenithElementBonuses.en = Object.keys(zenithElement).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "en")}</option>
        });
        zenithElementBonuses.zh = Object.keys(zenithElement).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "zh")}</option>
        });

        var zenithDamageLimitBonuses = {"ja": {}, "en": {}, "zh": {}};
        zenithDamageLimitBonuses.ja = Object.keys(zenithDamageLimit).map(function (opt) {
            return <option value={opt} key={opt}>{opt}</option>
        });
        zenithDamageLimitBonuses.en = Object.keys(zenithDamageLimit).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "en")}</option>
        });
        zenithDamageLimitBonuses.zh = Object.keys(zenithDamageLimit).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(opt, "zh")}</option>
        });

        var alljobs = {"ja": {}, "en": {}, "zh": {}};
        alljobs.ja = Object.keys(Jobs).map(function (opt) {
            return <option value={opt} key={opt}>{Jobs[opt].name}</option>
        });
        alljobs.en = Object.keys(Jobs).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(Jobs[opt].name, "en")}</option>
        });
        alljobs.zh = Object.keys(Jobs).map(function (opt) {
            return <option value={opt} key={opt}>{intl.translate(Jobs[opt].name, "zh")}</option>
        });

        return {
            zenithBonuses: zenithBonuses,
            zenithDABonuses: zenithDABonuses,
            zenithTABonuses: zenithTABonuses,
            //zenithCriticalBonuses: zenithCriticalBonuses,
            zenithOugiDamageBonuses: zenithOugiDamageBonuses,
            zenithChainDamageBonuses: zenithChainDamageBonuses,
            zenithChainDamageLimitBonuses: zenithChainDamageLimitBonuses,
            zenithElementBonuses: zenithElementBonuses,
            zenithDamageLimitBonuses: zenithDamageLimitBonuses,
            alljobs: alljobs,
        };
    },
    componentDidMount: function () {
        // Pass initialized state to the upper hierarchy
        this.props.onChange(this.state);
    },
    componentWillReceiveProps: function (nextProps) {
        // only fired on Data Load
        if (nextProps.dataName != this.props.dataName && (nextProps.dataForLoad != undefined)) {
            var newState = nextProps.dataForLoad;
            this.setState(newState);
            return 0;
        }
    },
    getInitialState: function () {
        return {
            rank: 1,
            zenithAttackBonus: 0,
            zenithHPBonus: 0,
            zenithPartyHPBonus: 0,
            zenithBonus1: "無し",
            zenithBonus2: "無し",
            zenithDABonus: "無し",
            zenithTABonus: "無し",
            //zenithCriticalBonus: 0,
            zenithOugiDamageBonus: "無し",
            zenithChainDamageBonus: "無し",
            zenithChainDamageLimitBonus: "無し",
            zenithElementBonus: "無し",
            zenithDamageLimitBonus: "無し",
            masterBonus: 0,
            masterBonusHP: 0,
            masterBonusDA: 0,
            masterBonusTA: 0,
            masterBonusDamageLimit: 0,
            normalBuff: 0,
            elementBuff: 0,
            otherBuff: 0,
            otherBuff2: 0,
            ougiDamageBuff: 0,
            additionalDamageBuff: 0,
            supplementalDamageBuff: 0,
            damageLimitBuff: 0.0,
            ougiDamageLimitBuff: 0.0,
            ougiGageUpOugiBuff: 0.0,
            uplift: 0,
            hpBuff: 0,
            daBuff: 0,
            taBuff: 0,
            hp: 100,
            remainHP: 100,
            enemyElement: "wind",
            enemyDefense: 10.0,
            defenseDebuff: 0.0,
            enemyResistance: 0.0,
            job: "none",
            sex: "female",
            element: "fire",
            DA: 6.5,
            TA: 3.0,
            ougiGageBuff: 0,
            ougiRatio: 4.5,
            minimumHP: 0.0,
            chainNumber: 1,
            personalNormalBuff: 0.0,
            personalElementBuff: 0.0,
            personalOtherBuff: 0.0,
            personalOtherBuff2: 0.0,
            personalAdditionalDamageBuff: 0.0,
            personalSupplementalDamageBuff: 0,
            personalDABuff: 0.0,
            personalTABuff: 0.0,
            personalOugiDamageBuff: 0.0,
            personalOugiGageBuff: 0.0,
            personalUplift: 0,
            personalDamageLimitBuff: 0.0,
            personalOugiDamageLimitBuff: 0.0,
            ruleMaxSize: true,
            filterOptionsChanged: false,
            criticalBuff: [],
            criticalBuffCount: 0,
            personalCriticalBuff: [],
            personalCriticalBuffCount: 0,
            retsujitsuNoRakuen: false,
        };
    },
    switchBufflist: function (e) {
        this.setState({openBufflist: !(this.state.openBufflist)})
    },
    switchLBlist: function (e) {
        this.setState({openLBlist: !(this.state.openLBlist)})
    },
    handleEvent: function (key, e) {
        // input type input form uses onBlur
        var newState = this.state;
        newState[key] = e.target.value;

        if (key == "criticalBuffCount") {
            if (newState.criticalBuff.length > newState.criticalBuffCount) {
                newState.criticalBuff = newState.criticalBuff.slice(0, newState.criticalBuffCount);
            }
            for (let i = 0; i < newState.criticalBuffCount; i++) {
                if (newState.criticalBuff[i] == undefined) {
                    newState.criticalBuff[i] = {"value": 0.0, "attackRatio": 0.0};
                }
            }
        } else if (key == "personalCriticalBuffCount") {
            if (newState.personalCriticalBuff.length > newState.personalCriticalBuffCount) {
                newState.personalCriticalBuff = newState.personalCriticalBuff.slice(0, newState.personalCriticalBuffCount);
            }
            for (let i = 0; i < newState.personalCriticalBuffCount; i++) {
                if (newState.personalCriticalBuff[i] == undefined) {
                    newState.personalCriticalBuff[i] = {"value": 0.0, "attackRatio": 0.0};
                }
            }
        }

        this.setState(newState)
    },
    handleOnBlur: function (e) {
        // Send change to parent only when focus is off
        this.props.onChange(this.state);
    },
    handleSelectEvent: function (key, e) {
        // A select type input form is good for onChange
        var newState = this.state;
        if (e.target.type === "checkbox") {
            newState[key] = e.target.checked;
        } else {
            newState[key] = e.target.value;
        }

        if (key == "job") {
            newState.DA = Jobs[e.target.value].DaBonus;
            newState.TA = Jobs[e.target.value].TaBonus
        }
        if (e.target.type === "checkbox") {
            newState[key] = e.target.checked;
            if (key.toLowerCase().includes("rule")) {
                newState.filterOptionsChanged = true;
            }
        }
        this.setState(newState);
        this.props.onChange(newState);
    },
    renderTwitterLink: function () {
        if (process.env.TWITTER_ID) {
            return (
                <p className="text-success">運営者のTwitterはこちら <a href={`https://twitter.com/${process.env.TWITTER_ID}`}
                                                               target="_blank">{`@${process.env.TWITTER_ID}`}</a></p>
            );
        }
        return null;
    },
    render: function () {
        let locale = this.props.locale;
        let showInvul = this.state.openBufflist ? "" : "hidden";
        return (
            <div className="profile">
                {this.renderTwitterLink()}
                <table className="table table-sm table-bordered table-responsive">
                    <tbody>
                    <tr>
                        <td colSpan="2">
                            <strong>{intl.translate("プロフィールタイトル", locale)}</strong>
                        </td>
                    </tr>

                    <tr>
                        <th className="bg-primary">{intl.translate("ジータさん属性", locale)}<span className="input-suggest">*</span></th>
                        <td><FormControl componentClass="select" value={this.state.element}
                                         onChange={this.handleSelectEvent.bind(this, "element")}> {selector[locale].elements} </FormControl>
                        </td>
                    </tr>

                    <TextWithTooltip tooltip={intl.translate("敵の属性説明", locale)} id={"tooltip-enemy-element-detail"}>
                        <tr>
                            <th className="bg-primary">
                                {intl.translate("敵の属性", locale)}<span className="input-suggest">*</span>
                            </th>
                            <td><FormControl componentClass="select" value={this.state.enemyElement}
                                             onChange={this.handleSelectEvent.bind(this, "enemyElement")}> {selector[locale].enemyElements} </FormControl>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("ランク説明", locale)} id={"tooltip-rank-detail"}>
                        <tr>
                            <th className="bg-primary">Rank<span className="input-suggest">*</span></th>
                            <td><FormControl type="number" min="1" max="300" value={this.state.rank}
                                             onBlur={this.handleOnBlur} onChange={this.handleEvent.bind(this, "rank")}/>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("ジョブ説明", locale)} id={"tooltip-job-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("ジョブ", locale)}<span className="input-suggest">*</span>
                                <span style={{display: "block"}}
                                      className="label label-default">{intl.translate("得意", locale)}</span>
                                <span style={{display: "block"}}
                                      className="label label-default">[{intl.translate(armTypes[Jobs[this.state.job].favArm1], locale)}, {intl.translate(armTypes[Jobs[this.state.job].favArm2], locale)}]</span>
                                <span style={{display: "block"}}
                                      className="label label-info">{intl.translate(jobTypes[Jobs[this.state.job].type], locale)}{intl.translate("タイプ", locale)}</span>
                                <span style={{display: "block"}}
                                      className="label label-danger">{intl.translate("攻撃ボーナス", locale)} {Jobs[this.state.job].atBonus}</span>
                                <span style={{display: "block"}}
                                      className="label label-success">{intl.translate("HPボーナス", locale)} {Jobs[this.state.job].hpBonus}</span>
                                <span style={{display: "block"}}
                                      className="label label-danger">{intl.translate("攻刃ボーナス", locale)} {Jobs[this.state.job].kouzinBonus}%</span>
                                <span style={{display: "block"}}
                                      className="label label-success">{intl.translate("守護ボーナス", locale)} {Jobs[this.state.job].shugoBonus}%</span>
                                <span style={{display: "block"}}
                                      className="label label-warning">{intl.translate("基礎DA率", locale)} {Jobs[this.state.job].DaBonus}%</span>
                                <span style={{display: "block"}}
                                      className="label label-warning">{intl.translate("基礎TA率", locale)} {Jobs[this.state.job].TaBonus}%</span>
                            </th>
                            <td><FormControl componentClass="select" value={this.state.job}
                                             onChange={this.handleSelectEvent.bind(this, "job")}> {this.props.alljobs[locale]} </FormControl>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <tr>
                        <th className="bg-primary">{intl.translate("ジータさん性別", locale)}</th>
                        <td><FormControl componentClass="select" value={this.state.sex}
                                         onChange={this.handleSelectEvent.bind(this, "sex")}> {selector[locale].sexes} </FormControl>
                        </td>
                    </tr>

                    <tr>
                        <th className="bg-primary"><Button
                            onClick={this.switchBufflist}>{intl.translate("個別バフ", locale)}</Button></th>
                        <td/>
                    </tr>

                    <TextWithTooltip tooltip={intl.translate("残HP割合説明(ジータのみ)", locale)}
                                     id={"tooltip-remain-hp-djeeta-detail"}>
                        <tr className={showInvul}>
                            <th className="bg-primary">
                                {intl.translate("残HP割合", locale)}<br/>{intl.translate("ジータさんのみ", locale)}
                            </th>
                            <td>
                                <InputGroup>
                                    <FormControl componentClass="select" value={this.state.remainHP}
                                                 onChange={this.handleSelectEvent.bind(this, "remainHP")}>{selector.hplist}</FormControl>
                                    <InputGroup.Addon>%</InputGroup.Addon>
                                </InputGroup>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <tr className={showInvul} key="personalNormalBuff">
                        <th className="bg-primary">{intl.translate("通常バフ", locale)}</th>
                        <td>
                            <Typeahead value={this.state.personalNormalBuff}
                                       options={selector.buffLevel}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       stat="personalNormalBuff"
                                       addon="%">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr className={showInvul} key="personalElementBuff">
                        <th className="bg-primary">{intl.translate("属性バフ", locale)}</th>
                        <td>
                            <Typeahead value={this.state.personalElementBuff}
                                       options={selector.buffLevel}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       stat="personalElementBuff"
                                       addon="%">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr className={showInvul} key="personalOtherBuff">
                        <th className="bg-primary">{intl.translate("その他バフ", locale)}</th>
                        <td>
                            <Typeahead value={this.state.personalOtherBuff}
                                       options={selector.buffLevel}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       stat="personalOtherBuff"
                                       addon="%">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr className={showInvul} key="personalOtherBuff2">
                        <th className="bg-primary">{intl.translate("その他バフ2", locale)}</th>
                        <td>
                            <Typeahead value={this.state.personalOtherBuff2}
                                       options={selector.buffLevel}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       stat="personalOtherBuff2"
                                       addon="%">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr className={showInvul} key="personalCriticalBuff">
                        <th className="bg-primary">{intl.translate("クリティカルバフ", locale)}</th>
                        <td>
                            <CriticalBuffList locale={locale}
                                              onBlur={this.handleOnBlur}
                                              onCountChange={(count) => this.setState({personalCriticalBuffCount: count})}
                                              label="personalCriticalBuff"
                                              criticalArray={this.state.personalCriticalBuff}
                                              initialCount={this.state.personalCriticalBuffCount}/>
                        </td>
                    </tr>

                    <tr className={showInvul} key="personalDABuff">
                        <th className="bg-primary">{intl.translate("DAバフ", locale)}</th>
                        <td>
                            <Typeahead value={this.state.personalDABuff}
                                       options={selector.buffLevel}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       stat="personalDABuff"
                                       addon="%">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr className={showInvul} key="personalTABuff">
                        <th className="bg-primary">{intl.translate("TAバフ", locale)}</th>
                        <td>
                            <Typeahead value={this.state.personalTABuff}
                                       options={selector.buffLevel}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       stat="personalTABuff"
                                       addon="%">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr className={showInvul} key="personalAdditionalDamageBuff">
                        <th className="bg-primary">{intl.translate("追加ダメージバフ", locale)}</th>
                        <td>
                            <Typeahead value={this.state.personalAdditionalDamageBuff}
                                       options={selector.buffLevel}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       stat="personalAdditionalDamageBuff"
                                       addon="%">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr className={showInvul} key="personalSupplementalDamageBuff">
                        <th className="bg-primary">{intl.translate("supplementalDamageBuff", locale)}</th>
                        <td>
                            <FormControl id="personalSupplementalDamageBuffField" type="number"
                                         value={this.state.personalSupplementalDamageBuff}
                                         onFocus={this.handleOnFocus}
                                         onBlur={this.handleOnBlur.bind(this, "personalSupplementalDamageBuff")}
                                         onChange={this.handleEvent.bind(this, "personalSupplementalDamageBuff")}/>
                        </td>
                    </tr>

                    <tr className={showInvul} key="personalOugiDamageBuff">
                        <th className="bg-primary">{intl.translate("奥義ダメージUP", locale)}</th>
                        <td>
                            <Typeahead value={this.state.personalOugiDamageBuff}
                                       options={selector.buffLevel}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       stat="personalOugiDamageBuff"
                                       addon="%">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr className={showInvul} key="personalOugiGageBuff">
                        <th className="bg-primary">{intl.translate("奥義ゲージ上昇率アップ", locale)}</th>
                        <td>
                            <Typeahead value={this.state.personalOugiGageBuff}
                                       options={selector.buffLevel}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       stat="personalOugiGageBuff"
                                       addon="%">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr className={showInvul} key="personalUplift">
                        <th className="bg-primary">{intl.translate("高揚", locale)}</th>
                        <td>
                            <Typeahead value={this.state.personalUplift}
                                       options={selector.buffLevel}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       stat="personalUplift"
                                       addon="%">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr className={showInvul} key="personalDamageLimitBuff">
                        <th className="bg-primary">{intl.translate("ダメージ上限アップ", locale)}</th>
                        <td>
                            <Typeahead value={this.state.personalDamageLimitBuff}
                                       options={selector.buffLevel}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       stat="personalDamageLimitBuff"
                                       addon="%">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr className={showInvul} key="personalOugiDamageLimitBuff">
                        <th className="bg-primary">{intl.translate("奥義ダメージ上限アップ", locale)}</th>
                        <td>
                            <Typeahead value={this.state.personalOugiDamageLimitBuff}
                                       options={selector.buffLevel}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       stat="personalOugiDamageLimitBuff"
                                       addon="%">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                            <strong>{intl.translate("ジータさんマスターボーナス", locale)}</strong>
                            <p>{intl.translate("ジータさんマスターボーナス説明", locale)}</p>
                        </td>
                    </tr>

                    <TextWithTooltip tooltip={intl.translate("マスボATK説明", locale)}
                                     id={"tooltip-masterbonus-atk-detail"}
                                     ref={(ref) => this["tooltip-masterbonus-atk-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">
                                {intl.translate("マスボATK", locale)}
                            </th>
                            <td>
                                <Typeahead value={this.state.masterBonus}
                                           options={selector.masteratk}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-masterbonus-atk-detail"]}
                                           stat="masterBonus"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("マスボHP説明", locale)}
                                     id={"tooltip-masterbonus-hp-detail"}
                                     ref={(ref) => this["tooltip-masterbonus-hp-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">
                                {intl.translate("マスボHP", locale)}
                            </th>
                            <td>
                                <Typeahead value={this.state.masterBonusHP}
                                           options={selector.masterhp}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-masterbonus-hp-detail"]}
                                           stat="masterBonusHP"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("マスボDA説明", locale)}
                                     id={"tooltip-masterbonus-da-detail"}
                                     ref={(ref) => this["tooltip-masterbonus-da-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">
                                {intl.translate("マスボDA", locale)}
                            </th>
                            <td>
                                <Typeahead value={this.state.masterBonusDA}
                                           options={selector.masterDA}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-masterbonus-da-detail"]}
                                           stat="masterBonusDA"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("マスボTA説明", locale)}
                                     id={"tooltip-masterbonus-ta-detail"}
                                     ref={(ref) => this["tooltip-masterbonus-ta-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">
                                {intl.translate("マスボTA", locale)}
                            </th>
                            <td>
                                <Typeahead value={this.state.masterBonusTA}
                                           options={selector.masterTA}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-masterbonus-ta-detail"]}
                                           stat="masterBonusTA"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("マスボダメ上限説明", locale)}
                                     id={"tooltip-masterbonus-damagelimit-detail"}
                                     ref={(ref) => this["tooltip-masterbonus-damagelimit-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">
                                {intl.translate("マスボダメ上限", locale)}
                            </th>
                            <td>
                                <Typeahead value={this.state.masterBonusDamageLimit}
                                           options={selector.masterDamageLimit}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-masterbonus-damagelimit-detail"]}
                                           stat="masterBonusDamageLimit"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <tr>
                        <td colSpan="2">
                            <strong>{intl.translate("ジータさんリミットボーナス", locale)}</strong>
                            <p>{intl.translate("ジータさんリミットボーナス説明", locale)}</p>
                        </td>
                    </tr>

                    <tr>
                        <th className="bg-primary">{intl.translate("LB 攻撃力", locale)}
                            <span className="input-suggest">*</span>
                        </th>
                        <td>
                            <Typeahead value={this.state.zenithAttackBonus}
                                       options={selector.zenithAttack}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       min={0}
                                       max={10000}
                                       stat="zenithAttackBonus">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr>
                        <th className="bg-primary">{intl.translate("LB HP", locale)}</th>
                        <td>
                            <Typeahead value={this.state.zenithHPBonus}
                                       options={selector.zenithHP}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       min={0}
                                       max={10000}
                                       stat="zenithHPBonus">
                            </Typeahead>
                        </td>
                    </tr>

                    <tr>
                        <th className="bg-primary">{intl.translate("味方全体のHP", locale)}</th>
                        <td>
                            <Typeahead value={this.state.zenithPartyHPBonus}
                                       options={selector.zenithPartyHP}
                                       onBlur={this.handleOnBlur}
                                       onChange={this.handleEvent}
                                       min={0}
                                       max={10000}
                                       stat="zenithPartyHPBonus">
                            </Typeahead>
                        </td>
                    </tr>

                    <TextWithTooltip tooltip={intl.translate("LB DAの説明", locale)} id={"tooltip-da-zenith-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("LB DA", locale)}</th>
                            <td><FormControl componentClass="select" value={this.state.zenithDABonus}
                                             onChange={this.handleSelectEvent.bind(this, "zenithDABonus")}> {this.props.zenithDABonuses[locale]} </FormControl>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("LB TAの説明", locale)} id={"tooltip-ta-zenith-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("LB TA", locale)}</th>
                            <td><FormControl componentClass="select" value={this.state.zenithTABonus}
                                             onChange={this.handleSelectEvent.bind(this, "zenithTABonus")}> {this.props.zenithTABonuses[locale]} </FormControl>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("LB ダメージ上限UPの説明", locale)} id={"tooltip-ta-zenith-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("LB ダメージ上限UP", locale)}</th>
                            <td><FormControl componentClass="select" value={this.state.zenithDamageLimitBonus}
                                             onChange={this.handleSelectEvent.bind(this, "zenithDamageLimitBonus")}> {this.props.zenithDamageLimitBonuses[locale]} </FormControl>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("LB 奥義の説明", locale)} id={"tooltip-ougidamage-zenith-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("LB 奥義", locale)}</th>
                            <td><FormControl componentClass="select" value={this.state.zenithOugiDamageBonus}
                                             onChange={this.handleSelectEvent.bind(this, "zenithOugiDamageBonus")}> {this.props.zenithOugiDamageBonuses[locale]} </FormControl>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <tr>
                        <th className="bg-primary"><Button
                            onClick={this.switchLBlist}>{intl.translate("その他ジータさんLB", locale)}</Button></th>
                        <td/>
                    </tr>

                    {this.state.openLBlist ?
                        [
                            <TextWithTooltip tooltip={intl.translate("LB 属性攻撃の説明", locale)}
                                             id={"tooltip-critical-zenith-detail"}>
                                <tr>
                                    <th className="bg-primary">{intl.translate("LB 属性攻撃", locale)}</th>
                                    <td><FormControl componentClass="select" value={this.state.zenithElementBonus}
                                                     onChange={this.handleSelectEvent.bind(this, "zenithElementBonus")}> {this.props.zenithElementBonuses[locale]} </FormControl>
                                    </td>
                                </tr>
                            </TextWithTooltip>,

                            <TextWithTooltip tooltip={intl.translate("LB チェンバの説明", locale)}
                                             id={"tooltip-chaindamage-zenith-detail"}>
                                <tr>
                                    <th className="bg-primary">{intl.translate("LB チェンバ", locale)}</th>
                                    <td><FormControl componentClass="select" value={this.state.zenithChainDamageBonus}
                                                     onChange={this.handleSelectEvent.bind(this, "zenithChainDamageBonus")}> {this.props.zenithChainDamageBonuses[locale]} </FormControl>
                                    </td>
                                </tr>
                            </TextWithTooltip>,

                            <TextWithTooltip tooltip={intl.translate("LB チェンバ上限の説明", locale)}
                                             id={"tooltip-chaindamagelimit-zenith-detail"}>
                                <tr>
                                    <th className="bg-primary">{intl.translate("LB チェンバ上限", locale)}</th>
                                    <td><FormControl componentClass="select"
                                                     value={this.state.zenithChainDamageLimitBonus}
                                                     onChange={this.handleSelectEvent.bind(this, "zenithChainDamageLimitBonus")}> {this.props.zenithChainDamageLimitBonuses[locale]} </FormControl>
                                    </td>
                                </tr>
                            </TextWithTooltip>,

                            <TextWithTooltip tooltip={intl.translate("得意武器攻撃の説明", locale)}
                                             id={"tooltip-weapon-zenith-detail"}>
                                <tr>
                                    <th className="bg-primary">
                                        {intl.translate("得意武器攻撃1", locale)}({intl.translate(armTypes[Jobs[this.state.job].favArm1], locale)})
                                    </th>
                                    <td><FormControl componentClass="select" value={this.state.zenithBonus1}
                                                     onChange={this.handleSelectEvent.bind(this, "zenithBonus1")}> {this.props.zenithBonuses[locale]} </FormControl>
                                    </td>
                                </tr>
                            </TextWithTooltip>,

                            <TextWithTooltip tooltip={intl.translate("得意武器攻撃の説明", locale)}
                                             id={"tooltip-weapon-zenith-detail"}>
                                <tr>
                                    <th className="bg-primary">
                                        {intl.translate("得意武器攻撃2", locale)}({intl.translate(armTypes[Jobs[this.state.job].favArm2], locale)})
                                    </th>
                                    <td><FormControl componentClass="select" value={this.state.zenithBonus2}
                                                     onChange={this.handleSelectEvent.bind(this, "zenithBonus2")}> {this.props.zenithBonuses[locale]} </FormControl>
                                    </td>
                                </tr>
                            </TextWithTooltip>
                        ]
                        : null}

                    <tr>
                        <td colSpan="2">
                            <strong>{intl.translate("パーティバフタイトル", locale)}</strong>
                            <p>{intl.translate("パーティバフ説明", locale)}</p>
                        </td>
                    </tr>

                    <TextWithTooltip tooltip={intl.translate("通常バフ説明", locale)}
                                     id={"tooltip-normalbuff-detail"}
                                     ref={(ref) => this["tooltip-normalbuff-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">
                                {intl.translate("通常バフ", locale)}
                            </th>
                            <td className="table-profile-td">
                                <Typeahead value={this.state.normalBuff}
                                           options={selector.buffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-normalbuff-detail"]}
                                           stat="normalBuff"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("属性バフ説明", locale)}
                                     id={"tooltip-elementbuff-detail"}
                                     ref={(ref) => this["tooltip-elementbuff-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("属性バフ", locale)}</th>
                            <td>
                                <Typeahead value={this.state.elementBuff}
                                           options={selector.buffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-elementbuff-detail"]}
                                           stat="elementBuff"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("その他バフ説明", locale)}
                                     id={"tooltip-otherbuff-detail"}
                                     ref={(ref) => this["tooltip-otherbuff-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("その他バフ", locale)}</th>
                            <td>
                                <Typeahead value={this.state.otherBuff}
                                           options={selector.buffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-otherbuff-detail"]}
                                           stat="otherBuff"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("その他バフ2説明", locale)}
                                     id={"tooltip-otherbuff2-detail"}
                                     ref={(ref) => this['tooltip-otherbuff2-detail'] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("その他バフ2", locale)}</th>
                            <td>
                                <Typeahead value={this.state.otherBuff2}
                                           options={selector.buffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this['tooltip-otherbuff2-detail']}
                                           stat="otherBuff2"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("クリティカルバフ説明", locale)}
                                     id={"tooltip-critical-buff-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("クリティカルバフ", locale)}</th>
                            <td>
                                <CriticalBuffList locale={locale}
                                                  onBlur={this.handleOnBlur}
                                                  onCountChange={(count) => this.setState({criticalBuffCount: count})}
                                                  label="criticalBuff"
                                                  criticalArray={this.state.criticalBuff}
                                                  initialCount={this.state.criticalBuffCount}/>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("HPバフ説明", locale)}
                                     id={"tooltip-hpbuff-detail"}
                                     ref={(ref) => this["tooltip-hpbuff-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("HPバフ", locale)}</th>
                            <td>
                                <Typeahead value={this.state.hpBuff}
                                           options={selector.buffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-hpbuff-detail"]}
                                           stat="hpBuff"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("DAバフ説明", locale)}
                                     id={"tooltip-dabuff-detail"}
                                     ref={(ref) => this["tooltip-dabuff-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("DAバフ", locale)}</th>
                            <td>
                                <Typeahead value={this.state.daBuff}
                                           options={selector.buffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-dabuff-detail"]}
                                           stat="daBuff"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("TAバフ説明", locale)}
                                     id={"tooltip-tabuff-detail"}
                                     ref={(ref) => this["tooltip-tabuff-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("TAバフ", locale)}</th>
                            <td>
                                <Typeahead value={this.state.taBuff}
                                           options={selector.buffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-tabuff-detail"]}
                                           stat="taBuff"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("残HP割合", locale)} id={"tooltip-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("残HP割合", locale)}</th>
                            <td>
                                <InputGroup>
                                    <FormControl componentClass="select" value={this.state.hp}
                                                 onChange={this.handleSelectEvent.bind(this, "hp")}>{selector.hplist}</FormControl>
                                    <InputGroup.Addon>%</InputGroup.Addon>
                                </InputGroup>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("奥義ダメージ上限アップ説明", locale)}
                                     id={"tooltip-ougidamagebuff-detail"}
                                     ref={(ref) => this["tooltip-ougidamagebuff-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("奥義ダメージバフ", locale)}</th>
                            <td>
                                <Typeahead value={this.state.ougiDamageBuff}
                                           options={selector.buffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-ougidamagebuff-detail"]}
                                           stat="ougiDamageBuff"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("追加ダメージバフ説明", locale)}
                                     id={"tooltip-additionalbuff-detail"}
                                     ref={(ref) => this["tooltip-additionalbuff-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("追加ダメージバフ", locale)}</th>
                            <td>
                                <Typeahead value={this.state.additionalDamageBuff}
                                           options={selector.buffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-additionalbuff-detail"]}
                                           stat="additionalDamageBuff"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("supplementalDamageBuff-tooltip", locale)} //与ダメージ上昇効果バフ
                                     id={"tooltip-supplementalDamageBuff-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("supplementalDamageBuff", locale)}</th>
                            <td>
                                <FormControl type="number" min="0" step="1000" max="100000" value={this.state.supplementalDamageBuff}
                                             onBlur={this.handleOnBlur} onChange={this.handleEvent.bind(this, "supplementalDamageBuff")}></FormControl>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("奥義ゲージ上昇率アップ説明", locale)}
                                     id={"tooltip-ougigagebuff-detail"}
                                     ref={(ref) => this["tooltip-ougigagebuff-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("奥義ゲージ上昇量バフ", locale)}</th>
                            <td>
                                <Typeahead value={this.state.ougiGageBuff}
                                           options={selector.buffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-ougigagebuff-detail"]}
                                           stat="ougiGageBuff"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("高揚説明", locale)}
                                     id={"tooltip-uplift-detail"}
                                     ref={(ref) => this["tooltip-uplift-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("高揚", locale)}</th>
                            <td>
                                <Typeahead value={this.state.uplift}
                                           options={selector.buffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-uplift-detail"]}
                                           stat="uplift"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("奥義ゲージ上昇奥義説明", locale)}
                                     id={"tooltip-ougi-gage-up-ougi-buff-detail"}
                                     ref={(ref) => this["tooltip-ougi-gage-up-ougi-buff-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("奥義ゲージ上昇奥義", locale)}</th>
                            <td>
                                <Typeahead value={this.state.ougiGageUpOugiBuff}
                                           options={selector.ougiGageUpOugiBuffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           min={0}
                                           max={100}
                                           tooltip={this["tooltip-ougi-gage-up-ougi-buff-detail"]}
                                           stat="ougiGageUpOugiBuff"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("ダメージ上限アップ説明", locale)}
                                     id={"tooltip-damage-limit-buff-detail"}
                                     ref={(ref) => this["tooltip-damage-limit-buff-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("ダメージ上限バフ", locale)}</th>
                            <td>
                                <Typeahead value={this.state.damageLimitBuff}
                                           options={selector.buffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-damage-limit-buff-detail"]}
                                           stat="damageLimitBuff"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("奥義ダメージ上限アップ説明", locale)}
                                     id={"tooltip-ougi-damage-limit-buff-detail"}
                                     ref={(ref) => this["tooltip-ougi-damage-limit-buff-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("奥義ダメージ上限バフ", locale)}</th>
                            <td>
                                <Typeahead value={this.state.ougiDamageLimitBuff}
                                           options={selector.buffLevel}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-ougi-damage-limit-buff-detail"]}
                                           stat="ougiDamageLimitBuff"
                                           addon="%">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <tr>
                        <td colSpan="2">
                            <strong>{intl.translate("Advanced", locale)}</strong>
                            <p>{intl.translate("Advanced 説明", locale)}</p>
                        </td>
                    </tr>

                    <TextWithTooltip tooltip={intl.translate("敵防御固有値説明", locale)}
                                     id={"tooltip-enemy-defense-detail"}
                                     ref={(ref) => this["tooltip-enemy-defense-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("敵防御固有値", locale)}</th>
                            <td>
                                <Typeahead value={this.state.enemyDefense}
                                           options={selector[locale].enemydeftypes}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           inputProps={{type:"text"}}
                                           tooltip={this["tooltip-enemy-defense-detail"]}
                                           stat="enemyDefense">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("防御デバフ合計説明", locale)} id={"tooltip-defense-debuff-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("防御デバフ合計", locale)}<span className="input-suggest">*</span></th>
                                <td>
                                    <InputGroup>
                                        <FormControl type="number" min="0" step="5" max="100" value={this.state.defenseDebuff}
                                            onBlur={this.handleOnBlur}
                                            onChange={this.handleEvent.bind(this, "defenseDebuff")}/>
                                        <InputGroup.Addon>%</InputGroup.Addon>
                                    </InputGroup>
                                </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("敵非有利耐性説明", locale)} id={"tooltip-enemy-resistance-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("敵非有利耐性", locale)}</th>
                            <td><InputGroup><FormControl type="number" min="0" step="5" max="100" value={this.state.enemyResistance}
                                             onBlur={this.handleOnBlur} onChange={this.handleEvent.bind(this, "enemyResistance")}/>
                                            <InputGroup.Addon>%</InputGroup.Addon>
                            </InputGroup></td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("烈日の楽園説明", locale)} id={"tooltip-sun-touched-paradise-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("特殊効果", locale)}</th>
                                <td>
                                    <Checkbox inline checked={this.state.retsujitsuNoRakuen}
                                              onChange={this.handleSelectEvent.bind(this, "retsujitsuNoRakuen")}>
                                        <strong>{intl.translate("烈日の楽園", locale)}</strong>
                                    </Checkbox>
                                </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("ジータさん基礎DA率説明", locale)}
                                     id={"tooltip-player-baseda-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("ジータさん", locale)}<br/>{intl.translate("基礎DA率", locale)}
                            </th>
                            <td><InputGroup><FormControl type="number" min="0" step="0.1" value={this.state.DA}
                                             onBlur={this.handleOnBlur} onChange={this.handleEvent.bind(this, "DA")}/>
                                            <InputGroup.Addon>%</InputGroup.Addon>
                            </InputGroup></td>
                        </tr>
                    </TextWithTooltip>
                    <TextWithTooltip tooltip={intl.translate("ジータさん基礎TA率説明", locale)}
                                     id={"tooltip-player-baseta-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("ジータさん", locale)}<br/>{intl.translate("基礎TA率", locale)}
                            </th>
                            <td><InputGroup><FormControl type="number" min="0" step="0.1" value={this.state.TA}
                                             onBlur={this.handleOnBlur} onChange={this.handleEvent.bind(this, "TA")}/>
                                            <InputGroup.Addon>%</InputGroup.Addon>
                            </InputGroup></td>
                        </tr>
                    </TextWithTooltip>
                    <TextWithTooltip tooltip={intl.translate("ジータさん奥義倍率説明", locale)}
                                     id={"tooltip-ougi-ratio-detail"}
                                     ref={(ref) => this["tooltip-ougi-ratio-detail"] = ref}>
                        <tr>
                            <th className="bg-primary">{intl.translate("ジータさん", locale)}<br/>{intl.translate("奥義倍率", locale)}
                            </th>
                            <td>
                                <Typeahead value={this.state.ougiRatio}
                                           options={selector.ougiRatio}
                                           onBlur={this.handleOnBlur}
                                           onChange={this.handleEvent}
                                           tooltip={this["tooltip-ougi-ratio-detail"]}
                                           stat="ougiRatio">
                                </Typeahead>
                            </td>
                        </tr>
                    </TextWithTooltip>
                    <TextWithTooltip tooltip={intl.translate("確保HP説明", locale)} id={"tooltip-minimu-hp-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("確保HP", locale)}</th>
                            <td><FormControl type="number" min="0" value={this.state.minimumHP}
                                             onBlur={this.handleOnBlur}
                                             onChange={this.handleEvent.bind(this, "minimumHP")}/></td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("チェイン数説明", locale)} id={"tooltip-chain-number-detail"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("チェイン数", locale)}</th>
                            <td>
                                <FormControl componentClass="select" value={this.state.chainNumber}
                                             onChange={this.handleSelectEvent.bind(this, "chainNumber")}> {selector.chainNumber} </FormControl>
                            </td>
                        </tr>
                    </TextWithTooltip>

                    <TextWithTooltip tooltip={intl.translate("弱い編成を隠す", locale)} id={"tooltip-hide-grids"}>
                        <tr>
                            <th className="bg-primary">{intl.translate("弱い編成を隠す", locale)}</th>
                            <td>
                                <Checkbox inline checked={this.state.ruleMaxSize}
                                          onChange={this.handleSelectEvent.bind(this, "ruleMaxSize")}>
                                </Checkbox>
                            </td>
                        </tr>
                    </TextWithTooltip>
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Profile;
