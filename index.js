/* SCRIPT BY YOUR MOM*/
const JOB_NINJA = 11;

//Ninja skills

const S_Shadow = 20100; //0 30
const S_Shadow_D = 650; //fixed length
const S_Shadow_Dist = 100;

const S_Leaves = 30800;
const S_Leaves2 = 30830;
const S_Leaves_D = 1275;
const S_Leaves_Budda_D = 1375;

const S_Jagged = 41001; //41000; //65 66
const S_Jagged_D = 665; //fixed length
const S_Jagged_Dist = 470;
const S_Jagged_2 = 41010; //slash
const S_Jagged_2_D = 1500;
const S_Jagged_3 = 41011; //end
const S_Jagged_3_D = 300;

const S_Bomb = 50900; //0 & 30
const S_Bomb_Gly = 53200;
const S_Bomb_D = 1025;
const S_Bomb_Dist = -250;

const S_OneThousand = 61101; // -1 0 30
const S_OneThousand_D = 400; //fixed
const S_OneThousand_Dist = 150;
const S_OneThousand_2 = 61110;
const S_OneThousand_2_D = 3500;
const S_OneThousandDash_D = 460;

const S_Decoy = 71200; //backstab, special code
const S_Decoy_D = 1550;

const S_Fire = 80230; //80231; //80200; // 0 30
const S_Fire_2 = 80201;
const S_Fire_3 = 80202;
const S_Fire_D = 700;
const S_Fire_D2 = 1375;
const S_Fire_D3 = 325;
const S_Fire_Dist = 400;

const S_Fire_Buddha = 80251;
const S_Fire_Buddha_D1 = 2290;
const S_Fire_Buddha_D2 = 825;

const S_Smoke = 90100;
const S_Smoke2 = 90130;
const S_Smoke_D = 700;

const S_Focus = 110100;
const S_Focus2 = 110150;
const S_Focus_D = 1450;

const S_Skyfall = 121000; //0 1 2 30
const S_Skyfall_D = 1320;
const S_Skyfall_Dist = 100;

const S_COS = 130900; //0 1 2 30
const S_COS_D = 3225;
const S_COS_Dist = 100;

const S_DoubleCut = 141100; // 0 1 2 30
const S_DoubleCut_D = 1425;
const S_DoubleCut_Dist = 100;

const S_Burning = 150701;
//const S_Burning2 = 150702;
const S_Burning3 = 150703;
const S_Burning4 = 150704;
const S_Burning5 = 150705;
const S_Burning6 = 150706;
const S_Burning7 = 150707;
const S_Burning8 = 150708;
const S_Burning9 = 150709;
const S_Burning10 = 150710;
const S_Burning_D = 880;
const S_Burning_D2 = 390;

const S_Burning_Buddha = 150731;
const S_Burning_Buddha_D = 2380;

const S_Death = 160400;
const S_Death_D = 1520; //fixed

const S_Attune = 170100;
const S_Attune_D = 1000;

const S_Blade = 181100;
const S_Blade2 = 181130;
const S_Blade_D = 1000;

const S_Chakra = 190500; //0 30
const S_Chakra_D = 225;
const S_Chakra_D2 = 825;

const S_Clone = 200100;
const S_Clone_D = 1275; //fixed

const S_RETAL = 101000;
const S_RETAL_D = 1630;

const S_P = 11200; // 0 30
const S_P_Bug = 11240;
const S_P2 = 11201;
const S_P3 = 11202;
const S_P4 = 11203;
const S_P5 = 11204;
const S_P6 = 11205;
const S_P7 = 11206;
const S_P_D = 650; //all fixed
const S_P2_D = 1125;
const S_P3_D = 1200;
const S_P4_D = 1225;
const S_P5_D = 1700;
const S_P6_D = 1500;
const S_P7_D = 1150;

const S_ENLIGHTEN = 230100;
const S_ENLIGHTEN_D = 1385;

const S_LIGHTNING_T = 220110;
const S_LIGHTNING_T_BUDDHA = 220140;
const S_LIGHTNING_T_D = 1350;
const S_LIGHTNING_T_D2 = 2250;

const S_STUPID_KUNAI = 210100;
const S_STUPID_KUNAI_BLOCKED = 210115;
const S_STUPID_KUNAI_BLOCKED_2 = 210117;
const S_STUPID_KUNAI_BLOCKED_3 = 210150;
const S_STUPID_KUNAI_BLOCKED_4 = 210151;
const S_STUPID_KUNAI_BLOCKED_5 = 210112;
const S_STUPID_KUNAI_BLOCKED_6 = 210113;
const S_STUPID_KUNAI_BLOCKED_7 = 210118;
const S_STUPID_KUNAI_BLOCKED_8 = 210116;
const S_STUPID_KUNAI_BLOCKED_9 = 210114;
const S_STUPID_KUNAI_BLOCKED_10 = 210111;
const S_STUPID_KUNAI_D1 = 1010;
const S_STUPID_KUNAI_D2 = 1010;
const S_STUPID_KUNAI_D3 = 1625;

const S_STUPID_KUNAI_PROJ_1 = 1111112;
const S_STUPID_KUNAI_PROJ_2 = 1111113;




module.exports = function ninja(dispatch) {

    let config = {};
    let settingTimeout = null;
    let settingLock = false;

    const path = require('path');
    const fs = require('fs');

    try { config = require('./config.json'); }
    catch (e) {
        config = {};
        settingUpdate();
    }

    function settingUpdate() {
        clearTimeout(settingTimeout);
        settingTimeout = setTimeout(settingSave, 1000);
    }

    function settingSave() {
        if (settingLock) {
            settingUpdate();
            return;
        }

        settingLock = false;
        fs.writeFile(path.join(__dirname, 'config.json'), JSON.stringify(config, undefined, '\t'), err => {
            settingLock = false;
        });
    }


    //change GLOBAL_LATENCY to your lowest usual ping
    let GLOBAL_LATENCY = 0;
    if (("GLOBAL_LATENCY" in config)) {
        GLOBAL_LATENCY = config.GLOBAL_LATENCY;
    }
    if (!("GLOBAL_LATENCY" in config)) {
        config.GLOBAL_LATENCY = 0;
        config.GLOBAL_LATENCY_DESCRIPTION = "change GLOBAL_LATENCY to your lowest usual ping";
        settingUpdate();
    }
    let AA_RATIO = 1;
    if (("AA_RATIO" in config)) {
        AA_RATIO = config.AA_RATIO;
    }
    if (!("AA_RATIO" in config)) {
        config.AA_RATIO = 1;
        config.AA_RATIO_DESCRIPTION = "Auto attack glitch emulator. Default is 1, setting it higher increases AA speed.";
        settingUpdate();
    }

    let BH_ANTI_GHOST = true;
    if (("BH_ANTI_GHOST" in config)) {
        BH_ANTI_GHOST = config.BH_ANTI_GHOST;
    }
    if (!("BH_ANTI_GHOST" in config)) {
        config.BH_ANTI_GHOST = true;
        config.BH_ANTI_GHOST_DESCRIPTION = "Slows down first hit of BH but will stop most ghosting for BH. Activate this if you experience ghosting.";
        settingUpdate();
    }
    let BH_ALGORITHM_2 = true;
    if (("BH_ALGORITHM_2" in config)) {
        BH_ALGORITHM_2 = config.BH_ALGORITHM_2;
    }
    if (!("BH_ALGORITHM_2" in config)) {
        config.BH_ALGORITHM_2 = true;
        config.BH_ALGORITHM_2_DESCRIPTION = "For people who have bugged BH on algorithm 1 (unstable net), however this algorithm is SLOWER by 10~20ms. BH_ANTI_GHOST is not required for this algorithm.";
        settingUpdate();
    }
    let DISABLE_IFRAME_EMULATION = false;
    if (("DISABLE_IFRAME_EMULATION" in config)) {
        DISABLE_IFRAME_EMULATION = config.DISABLE_IFRAME_EMULATION;
    }
    if (!("DISABLE_IFRAME_EMULATION" in config)) {
        config.DISABLE_IFRAME_EMULATION = false;
        config.DISABLE_IFRAME_EMULATION_DESCRIPTION = "Will disable emulation for shadow jump and 1k cut, but why?";
        settingUpdate();
    }

    let DISABLE_1K_EMULATION = false;
    if (("DISABLE_1K_EMULATION" in config)) {
        DISABLE_1K_EMULATION = config.DISABLE_1K_EMULATION;
    }
    if (!("DISABLE_1K_EMULATION" in config)) {
        config.DISABLE_1K_EMULATION = false;
        config.DISABLE_1K_EMULATION_DESCRIPTION = "Will disable emulation for 1k cut, but why?";
        settingUpdate();
    }

    let CHAKRA_QUICK_ATTACK = false;
    if (("CHAKRA_QUICK_ATTACK" in config)) {
        CHAKRA_QUICK_ATTACK = config.CHAKRA_QUICK_ATTACK;
    }
    if (!("CHAKRA_QUICK_ATTACK" in config)) {
        config.CHAKRA_QUICK_ATTACK = false;
        config.CHAKRA_QUICK_ATTACK_DESCRIPTION = "Auto quick attack after chakra thrust. Requires robotjs.";
        settingUpdate();
    }

    let QUICK_ATTACK_KEY = "9";
    if (("QUICK_ATTACK_KEY" in config)) {
        QUICK_ATTACK_KEY = config.QUICK_ATTACK_KEY;
    }
    if (!("QUICK_ATTACK_KEY" in config)) {
        config.QUICK_ATTACK_KEY = "9";
        config.QUICK_ATTACK_KEY_DESCRIPTION = "Quick Attack key, find keyboard syntax list here http://robotjs.io/docs/syntax.";
        settingUpdate();
    }

    let cid;
    let job;
    let model;
    let enabled = false;
    let aspd;
    let S_Burning2 = 150702;

    let glitchAA = AA_RATIO;

    let atkid = [];
    let atkid_base = 0xFEFEFFEE;

    let disabSkill = [];
    let startTime = [];
    let timer = [];
    let finishcheck = [];
    let finish = [];
    let backstabActive = false;

    let Ignore1 = false;
    let Ignore2;

    let msgSuppress;
    let chakraTimer;
    let Fire1T;
    let Fire2T;
    let blazing;

    let failsafe = 0;

    let punchCounter = 0;
    let clearPunchCounter;

    let glyphState = [];

    let timer2;

    let lastSkillTime = [];
    let lastSkillDelay;
    let lastLastSkill;
    let lastLastSkillDelay;
    let lastSkillStart;
    let lastSkillEvent;
    let RecheckTimer;

    let myRE;

    let xloc;
    let yloc;
    let zloc;
    let wloc;
    let timeloc;
    let zloc2;
	
	let yen = false;

    let FA1 = false;
    let FA2 = false;
    let lastFA;

    let buddha = false;
    let trig2 = false;
    let trig3 = false;

    let BHStage;

    let actionsync;

    let jagLock = false;

    let lastSkill = 0;
    let lastEvent = { skill: undefined };
    let lastEventTime;
    let GLOBAL_LOCK_DELAY = 300;

    var atkArr;


    let talentState = [];
	dispatch.hook('S_LOAD_EP_INFO', dispatch.majorPatchVersion >= 105 ? 3 : 2, (event) => {
		if (!enabled) { return };
		talentState = [];
		event.perks.forEach(function (element) {
			talentState[element.id] = element.level;
		});
	});

    dispatch.hook('S_LEARN_EP_PERK', 1, (event) => {
        if (!enabled) { return };
        talentState = [];
        event.perks.forEach(function (element) {
            talentState[element.id] = element.level;
        });
    });

    dispatch.hook('S_LOAD_TOPO', 3, (event) => {
        if (event.zone == 118) {
            enabled = false;
        }
        else {
            enabled = [JOB_NINJA].includes(job);
        }
    });

    dispatch.hook('S_LOGIN', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
        cid = event.gameId;
        model = event.templateId;

        job = (model - 10101) % 100;
        enabled = [JOB_NINJA].includes(job);
        FA1 = false;
        FA2 = false;
        if (BH_ANTI_GHOST) {
            S_Burning2 = 100;
        }
    });

    dispatch.hook('C_CHAT', 1, (event) => {
        if (event.message.includes("disable11")) {
            enabled = false;
            console.log("Ninja script disabled");
            return false;
        }
        if (event.message.includes("enable11")) {
            enabled = [JOB_NINJA].includes(job);
            console.log("Ninja script enabled if you are currently logged into ninja");
            return false;
        }
    });

    function fakeEnd_sorc(event, duration, aaxxyy) {
        var yyy = 1;

        atkid[event.skill.id] = atkid_base;
        atkid_base--;
        dispatch.toClient('S_ACTION_STAGE', 9, {
            gameId: cid,
            loc: { x: aaxxyy.loc.x, y: aaxxyy.loc.y, z: aaxxyy.loc.z },
            w: aaxxyy.w,
            templateId: model,
            skill: event.skill.id,
            stage: 0,
            speed: aspd * yyy,
            projectileSpeed: aspd * yyy,
            id: atkid[event.skill.id],
            effectScale: 1.0, moving: false, dest: { x: 0, y: 0, z: 0 }, target: 0n, animSeq: [],
        });
        lastSkill = event.skill.id;
        timer[event.skill.id] = setTimeout(
            function (event, aaxxyy) {
                if (event.skill.id != lastSkill) { return; }
                dispatch.toClient('S_ACTION_END', 5, {
                    gameId: cid,
                    loc: { x: aaxxyy.loc.x, y: aaxxyy.loc.y, z: aaxxyy.loc.z },
                    w: aaxxyy.w,
                    templateId: model,
                    skill: event.skill.id,
                    type: 0,
                    id: atkid[event.skill.id],
                });
            }, duration / (aspd * yyy), event, lastEvent);
    }

    function force_end(event, xxz, unkz) {
        dispatch.toClient('S_ACTION_END', 5, {
            gameId: cid,
            loc: {
                x: xloc || event.loc.x,
                y: yloc || event.loc.y,
                z: zloc || event.loc.z
            },
            w: event.w,
            templateId: model,
            skill: xxz,
            type: unkz, //0x02
            id: atkid[xxz],
        });
    }
	
	dispatch.hook('S_CANNOT_START_SKILL', 4, {order: -999}, (event) => {
		if (!enabled) return;
		if(event.skill.id === S_Decoy){
			return false;
		}
	});
	
	dispatch.hook('S_SYSTEM_MESSAGE', 1, (event) => {
		if (!enabled) return;
		if(dispatch.parseSystemMessage(event.message).id == "SMT_SKILL_FAIL_CATEGORY") {return false};
	});

    function force_endabc(event, xxz, unkz) {
        dispatch.toClient('S_ACTION_END', 5, {
            gameId: cid,
            loc: {
                x: event.reaction.loc.x,
                y: event.reaction.loc.y,
                z: event.reaction.loc.z
            },
            w: event.reaction.w,
            templateId: model,
            skill: xxz,
            type: unkz, //0x02
            id: atkid[xxz],
        });
    }

    function fakeEnd_sorc_dist(event, duration, dist) {
        xloc = false;
        yloc = false;
        zloc = false;
        wloc = false;
        //if(timer[lastSkill]){
        //if(!(DISABLE_IFRAME_EMULATION && (event.skill.id == S_OneThousand_2))){
        clearTimeout(timer[lastSkill]);
        force_end(event, lastSkill, 6);
        //}
        //}
        if (DISABLE_IFRAME_EMULATION && (event.skill.id == S_OneThousand || event.skill.id == (S_OneThousand - 1) || event.skill.id == (S_OneThousand + 29) || event.skill.id == S_OneThousand_2 || event.skill.id == S_Shadow || event.skill.id == (S_Shadow + 30))) {
            lastLastSkill = lastSkill;
            lastSkill = event.skill.id;
            lastEvent = event;
            console.log("emulation disabled");
            return;
        }
        if (DISABLE_1K_EMULATION && (event.skill.id == S_OneThousand || event.skill.id == (S_OneThousand - 1) || event.skill.id == (S_OneThousand + 29) || event.skill.id == S_OneThousand_2)) {
            lastLastSkill = lastSkill;
            lastSkill = event.skill.id;
            lastEvent = event;
            return;
        }
        var zzz = 0;
        var yyy = 1;
        if ((event.skill.id == S_Fire || event.skill.id == (S_Fire + 30) || event.skill.id == S_Fire_2 || event.skill.id == S_Fire_3) && blazing) {
            yyy = 1.3;
        }
        if ((event.skill.id == S_Burning || event.skill.id == S_Burning2 || event.skill.id == S_Burning3 || event.skill.id == S_Burning4 || event.skill.id == S_Burning5 || event.skill.id == S_Burning6 || event.skill.id == S_Burning7 || event.skill.id == S_Burning8 || event.skill.id == S_Burning9 || event.skill.id == S_Burning10) && blazing) {
            yyy = 1.3;
        }
        if (event.skill.id == S_Shadow || (event.skill.id == S_Shadow + 30) || event.skill.id == S_Jagged || event.skill.id == S_OneThousand || event.skill.id == S_Death || event.skill.id == S_Clone || event.skill.id == S_P || (event.skill.id == S_P + 30) || event.skill.id == S_P2 || event.skill.id == S_P3 || event.skill.id == S_P4 || event.skill.id == S_P5 || event.skill.id == S_P6 || event.skill.id == S_P7) {
            yyy = 1 / aspd;
        }
        if ((event.skill.id == S_P || event.skill.id == S_P2 || event.skill.id == S_P3 || event.skill.id == S_P4 || event.skill.id == S_P5 || event.skill.id == S_P6 || event.skill.id == S_P7) && glitchAA > 1) {
            yyy = yyy * glitchAA;
        }
        if (event.skill.id == S_LIGHTNING_T && (lastSkill == S_Chakra || lastSkill == (S_Chakra + 30)) && finish[lastSkill] == false) {
            zzz = zzz + 20;
            duration = S_LIGHTNING_T_D2;
        }
        if (event.skill.id == S_LIGHTNING_T_BUDDHA && (lastSkill == S_Chakra || lastSkill == (S_Chakra + 30)) && finish[lastSkill] == false) {
            zzz = zzz + 20;
            duration = S_LIGHTNING_T_D2;
        }
        if (event.skill.id == S_STUPID_KUNAI && trig2 && !trig3 && !buddha) {
            zzz = zzz + 11;
            duration = S_STUPID_KUNAI_D2;
        }
        if (event.skill.id == S_STUPID_KUNAI && !trig2 && trig3 && !buddha) {
            zzz = zzz + 50;
            duration = S_STUPID_KUNAI_D3;
        }
        if (event.skill.id == S_STUPID_KUNAI && !trig2 && !trig3 && buddha) {
            zzz = zzz + 12;
        }
        if (event.skill.id == S_STUPID_KUNAI && trig2 && !trig3 && buddha) {
            zzz = zzz + 13;
            duration = S_STUPID_KUNAI_D2;
        }
        if (event.skill.id == S_STUPID_KUNAI && !trig2 && trig3 && buddha) {
            zzz = zzz + 51;
            duration = S_STUPID_KUNAI_D3;
        }
        if ((event.skill.id == S_Leaves) && buddha) {
            zzz = zzz + 40;
            duration = S_Leaves_Budda_D;
        }
        if ((event.skill.id == S_Leaves2) && buddha) {
            zzz = zzz + 10;
            duration = S_Leaves_Budda_D;
        }
        if (event.skill.id == S_Decoy && talentState[930710]) {
            yyy = yyy + (talentState[930710] * (10 / 700) + 25 / 700);
        }
        if ((event.skill.id == S_Blade || event.skill.id == S_Blade2) && talentState[931810]) {
            yyy = yyy + (talentState[931810] * (10 / 700) + 25 / 700);
        }
        clearTimeout(finishcheck[event.skill.id]);
        finish[event.skill.id] = false;
        var d = new Date();
        lastSkillStart = d.getTime();
        lastLastSkillDelay = lastSkillDelay;
        atkid[event.skill.id + zzz] = atkid_base;
        atkid_base--;

        dispatch.toClient('S_ACTION_STAGE', 9, {
            gameId: cid,
            loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
            w: event.w,
            templateId: model,
            skill: event.skill.id + zzz,
            stage: 0,
            speed: aspd * yyy,
            projectileSpeed: aspd * yyy,
            id: atkid[event.skill.id + zzz],
            effectScale: 1.0, moving: false, dest: { x: 0, y: 0, z: 0 }, target: 0n, animSeq: [],
        });

        if (DISABLE_IFRAME_EMULATION && (event.skill.id == S_OneThousand || event.skill.id == (S_OneThousand - 1) || event.skill.id == (S_OneThousand + 29) || event.skill.id == S_OneThousand_2 || event.skill.id == S_Shadow || event.skill.id == (S_Shadow + 30))) {
            console.log("error");
        }

        var newX;
        var newY;
        var angle = parseFloat(event.w);
        zloc2 = event.loc.z;

        var vvv = 7852;

        newX = Math.cos(angle) * dist;
        newY = Math.sin(angle) * dist;

        lastSkillDelay = duration / aspd;
        finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (duration / (aspd * yyy)), event);
        timer[event.skill.id] = setTimeout(
            function (event) {
                if (event.skill.id != lastSkill) { return; }
                var xzzy = event.skill.id;
                //if((event.skill.id == S_Fire || event.skill.id == S_Fire_2 || event.skill.id == S_Fire_3) && lastSkill != S_Fire && lastSkill != S_Fire_2 && lastSkill != S_Fire_3){return;}
                //if(xzzy.toString().substring(0, 6) != actionsync && xzzy.toString().substring(0, 5) != 67120){ return false;}
                if (lastSkill == S_Decoy && event.skill.id != S_Decoy) { return; }
                if (lastSkill == S_Jagged && event.skill.id != S_Jagged) { return; }
                if (lastSkill == (S_OneThousand - 1) && event.skill.id != (S_OneThousand - 1)) { return; }
                if (lastSkill == S_Shadow && event.skill.id != S_Shadow && lastSkill != S_Chakra && lastSkill != (S_Chakra + 30)) { return; }
                if (lastSkill == S_RETAL && event.skill.id != S_RETAL) { return; }
                if (lastSkill == 1 && lastSkill != S_Chakra && lastSkill != (S_Chakra + 30)) { return; }
                if (lastSkill == 5) { return; }
                if (event.skill.id == S_RETAL || event.skill.id == S_Bomb || event.skill.id == S_Bomb_Gly || (event.skill.id == S_Bomb_Gly + 30) || event.skill.id == (S_Bomb + 30)) {
                    xloc = false;
                    yloc = false;
                    zloc = false;
                    wloc = false;
                }
                dispatch.toClient('S_ACTION_END', 5, {
                    gameId: cid,
                    loc: {
                        x: xloc || (event.loc.x + newX),
                        y: yloc || (event.loc.y + newY),
                        z: zloc || (event.loc.z + 2)
                    },
                    w: event.w,
                    templateId: model,
                    skill: event.skill.id + zzz,
                    type: 0,
                    id: atkid[event.skill.id + zzz],
                });
            }, duration / (aspd * yyy), event);
    }


    dispatch.hook('S_CREST_INFO', 2, (event) => {
        if (!enabled) { return };
        event.crests.forEach(function (element) {
            glyphState[element.id] = element.enable;
        });
    });

    /*dispatch.hook('S_CANNOT_START_SKILL', 4, (event) => {
    if(!enabled){return};
    if(event.skill.id == S_Burning || event.skill.id == S_Burning2 || event.skill.id == S_Burning3 || event.skill.id == S_Burning4 || event.skill.id == S_Burning5 || event.skill.id == S_Burning6 || event.skill.id == S_Burning7 || event.skill.id == S_Burning8 || event.skill.id == S_Burning9 || event.skill.id == S_Burning10){
    fakeEnd_sorc(event, S_Burning_D2, lastEvent);
    lastEvent.skill.id = event.skill.id;
    dispatch.toServer('C_START_SKILL', 7, lastEvent);
    setTimeout(function(xxxz){
    dispatch.toServer('C_START_SKILL', 7, xxxz);
    }, 20, lastEvent);
    setTimeout(function(xxxz){
    dispatch.toServer('C_START_SKILL', 7, xxxz);
    }, 40, lastEvent);
    setTimeout(function(xxxz){
    dispatch.toServer('C_START_SKILL', 7, xxxz);
    }, 60, lastEvent);
    setTimeout(function(xxxz){
    dispatch.toServer('C_START_SKILL', 7, xxxz);
    }, 100, lastEvent);
    }
    });*/

    dispatch.hook('S_PLAYER_CHANGE_STAMINA', 1, (event) => {
        if (!enabled) return;
        myRE = event.current;
    });

    dispatch.hook('S_EACH_SKILL_RESULT', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
        if(event.target === cid) {
            if (event.reaction.enable == true) {
                force_endabc(event, lastSkill, 6); //needs to be changed on def updates
                lastSkill = 1;
                jagLock = true;
            }
        }
    });

    dispatch.hook('S_SYSTEM_MESSAGE', 1, (event) => {
        if (!enabled) { return };
        if ((event.message == '@2059' || event.message == '@36') && msgSuppress == event.message) {
            return false;
        }
        msgSuppress = event.message;
    });

    dispatch.hook('S_ABNORMALITY_BEGIN', 5, (event) => {
        if (!enabled) return;
        if (event.target !== cid) {
            return;
        }
        if (event.id == 32058) {
            blazing = true;
        }
        if (event.id == 10154080) {
            FA1 = true;
        }
        if (event.id == 10154081) {
            FA2 = true;
        }
        if (event.id == 10154480) {
            buddha = true;
        }
        if (event.id == 10154350) {
            trig2 = true;
        }
        if (event.id == 10154351) {
            trig3 = true;
        }
    });

    dispatch.hook('S_ABNORMALITY_END', 1, (event) => {
        if (!enabled) return;
        if (event.target !== cid) {
            return;
        }
        if (event.id == 32058) {
            blazing = false;
        }
        if (event.id == 10154080) {
            FA1 = false;
        }
        if (event.id == 10154081) {
            FA2 = false;
        }
        if (event.id == 10154480) {
            buddha = false;
        }
        if (event.id == 10154350) {
            trig2 = false;
        }
        if (event.id == 10154351) {
            trig3 = false;
        }
    });

    dispatch.hook('S_CREST_APPLY', 2, (event) => {
        if (!enabled) { return };
        glyphState[event.id] = event.enable;
    });

    dispatch.hook('C_START_TARGETED_SKILL', 7, (event) => {
        if (!enabled) return;
        //console.log("Start2 "+event.skill.id);
        if (lastSkill != event.skill.id) {
            //xloc = event.loc.x;
            //yloc = event.loc.y;
            //zloc = event.loc.z;
            //wloc = event.w;
        }

        if (event.skill.id == (S_Jagged + 1)) {
            event.skill.id = S_Jagged;
        }
        if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
        if (!disabSkill[event.skill.id]) {
            lastSkillDelay = 999999;
            BHStage = 0;
            if (job == JOB_NINJA && event.skill.id != S_P && (event.skill.id != S_P + 30) && event.skill.id != S_P_Bug && (event.skill.id != S_P_Bug + 30)) {
                punchCounter = 0;
            }

            if (job == JOB_NINJA && event.skill.id == S_Jagged) {
                setTimeout(function (event) { if (lastSkill == S_Jagged) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); } }, 25, event);
                setTimeout(function (event) { if (lastSkill == S_Jagged) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); } }, 50, event);
                setTimeout(function (event) { if (lastSkill == S_Jagged) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); } }, 75, event);
                setTimeout(function (event) { if (lastSkill == S_Jagged) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); } }, 100, event);
                if (finish[S_Blade2] == false) {
                    //return false;
                }
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Jagged] = false; }, GLOBAL_LOCK_DELAY * 2);
                fakeEnd_sorc_dist(event, S_Jagged_D, S_Jagged_Dist);
                dispatch.toClient('S_INSTANT_DASH', 3, {
                    gameId: cid,
                    target: 0n,
                    unk: 0,
                    loc: event.dest,
                    w: event.w
                });
            }

            if (job == JOB_NINJA && event.skill.id == S_OneThousand && lastSkill != S_Shadow && lastSkill != (S_Shadow + 30)) {
                fakeEnd_sorc_dist(event, S_OneThousand_D, S_OneThousand_Dist);
                dispatch.toClient('S_INSTANT_DASH', 3, {
                    gameId: cid,
                    target: 0n,
                    unk: 0,
                    loc: event.dest,
                    w: event.w
                });
            }

            if (job == JOB_NINJA && event.skill.id == S_Decoy) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Decoy] = false; }, GLOBAL_LOCK_DELAY * 3);
                fakeEnd_sorc_dist(event, S_Decoy_D, 0);
            }

            lastLastSkill = lastSkill;
            lastSkill = event.skill.id;
            lastEvent = event;
        }
    });

    function bhrepeater(details) {
        if (details.skill.id > BHStage) {
            if (details.skill.id == (BHStage + 1) || BHStage == 0) {
                dispatch.toServer('C_START_SKILL', 7, details);
            }
            setTimeout(bhrepeater, 50, details);
        }
    }



    dispatch.hook('C_START_SKILL', 7, (event) => {
        if (!enabled) return;
		yen = false;
        lastSkillDelay = 999999;
        if (lastSkill != event.skill.id) {
            //xloc = event.loc.x;
            //yloc = event.loc.y;
            //zloc = event.loc.z;
            //wloc = event.w;
        }
		
		if((event.skill.id == S_Bomb_Gly || event.skill.id == (S_Bomb_Gly + 30)) && (lastSkill == S_Bomb_Gly || lastSkill == (S_Bomb_Gly + 30)) && finish[lastSkill] == false){
			return false;
		}

        if (event.skill.id == (S_Death + 30)) {
            return;
        }
        if (event.skill.id == S_LIGHTNING_T_BUDDHA + 20) {
			yen = true;
			//setTimeout(function (event) { if(yen){dispatch.toServer('C_START_SKILL', 7, event); }}, 25, event);
            //setTimeout(function (event) { if(yen){dispatch.toServer('C_START_SKILL', 7, event); }}, 50, event);
            //setTimeout(function (event) { if(yen){dispatch.toServer('C_START_SKILL', 7, event); }}, 75, event);
            //setTimeout(function (event) { if(yen){dispatch.toServer('C_START_SKILL', 7, event); }}, 100, event);
            return;
        }

        if (event.skill.id == S_STUPID_KUNAI_BLOCKED || event.skill.id == S_STUPID_KUNAI_BLOCKED_2 || event.skill.id == S_STUPID_KUNAI_BLOCKED_3 || event.skill.id == S_STUPID_KUNAI_BLOCKED_4 || event.skill.id == S_STUPID_KUNAI_BLOCKED_5 || event.skill.id == S_STUPID_KUNAI_BLOCKED_6 || event.skill.id == S_STUPID_KUNAI_BLOCKED_7 || event.skill.id == S_STUPID_KUNAI_BLOCKED_8 || event.skill.id == S_STUPID_KUNAI_BLOCKED_9 || event.skill.id == S_STUPID_KUNAI_BLOCKED_10) {
            event.skill.id = S_STUPID_KUNAI;
        }

        if ((finish[S_Leaves] == false || finish[S_Leaves2] == false) && event.skill.id == S_Burning) {
            return false;
        }

        if (event.skill.id == S_STUPID_KUNAI && !trig3 && finish[lastSkill] == false && lastSkill != S_Leaves && lastSkill != S_Leaves2 && lastSkill != S_Burning_Buddha) {
            return false;
        }

        if (event.skill.id == S_Fire_Buddha + 1) {
            event.skill.id = S_Fire_Buddha;
        }

        if (event.skill.id == S_Burning || event.skill.id == S_Burning2 || event.skill.id == S_Burning3 || event.skill.id == S_Burning4 || event.skill.id == S_Burning5 || event.skill.id == S_Burning6 || event.skill.id == S_Burning7 || event.skill.id == S_Burning8 || event.skill.id == S_Burning9 || event.skill.id == S_Burning10) {
            if (BH_ALGORITHM_2) {
                bhrepeater(event);
            }
            if (!BH_ALGORITHM_2) {
                setTimeout(function (event) { if (event.skill.id > BHStage) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
                setTimeout(function (event) { if (event.skill.id > BHStage) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
                //setTimeout(function(event){if(event.skill.id > BHStage){dispatch.toServer('C_START_SKILL', 7, event);}},60,event);
                setTimeout(function (event) { if (event.skill.id > BHStage) { dispatch.toServer('C_START_SKILL', 7, event); } }, 75, event);
                setTimeout(function (event) { if (event.skill.id > BHStage) { dispatch.toServer('C_START_SKILL', 7, event); } }, 100, event);
                //setTimeout(function(event){if(event.skill.id > BHStage){dispatch.toServer('C_START_SKILL', 7, event);}},125,event);
                //setTimeout(function(event){if(event.skill.id > BHStage){dispatch.toServer('C_START_SKILL', 7, event);}},150,event);
                //setTimeout(function(event){if(event.skill.id > BHStage){dispatch.toServer('C_START_SKILL', 7, event);}},175,event);
                //setTimeout(function(event){if(event.skill.id > BHStage){dispatch.toServer('C_START_SKILL', 7, event);}},200,event);
            }
        }
        if (!(event.skill.id == S_Burning || event.skill.id == S_Burning2 || event.skill.id == S_Burning3 || event.skill.id == S_Burning4 || event.skill.id == S_Burning5 || event.skill.id == S_Burning6 || event.skill.id == S_Burning7 || event.skill.id == S_Burning8 || event.skill.id == S_Burning9 || event.skill.id == S_Burning10)) {
            BHStage = 0;
        }

        //console.log("Start "+event.skill.id);

        if (event.skill.id == S_P_Bug || event.skill.id == (S_P_Bug + 30)) {
            event.skill.id = S_P;
        }

        if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
        if (!disabSkill[event.skill.id]) {
            msgSuppress = 0;
            try { clearTimeout(timer[lastSkill]); }
            catch (e) { }
            try { clearTimeout(timer[lastLastSkill]); }
            catch (e) { }
            if (job == JOB_NINJA && event.skill.id != S_P && (event.skill.id != S_P + 30) && event.skill.id != S_P_Bug && (event.skill.id != S_P_Bug + 30)) {
                punchCounter = 0;
            }

            if (job == JOB_NINJA && (event.skill.id == S_P || (event.skill.id == S_P + 30) || event.skill.id == S_P_Bug || (event.skill.id == S_P_Bug + 30))) {
                if (jagLock) {
                    //return false;
                }
                if (punchCounter == 0) {
                    event.skill.id = S_P;
                }
                if (punchCounter == 1) {
                    event.skill.id = S_P2;
                }
                if (punchCounter == 2) {
                    event.skill.id = S_P3;
                }
                if (punchCounter == 3) {
                    event.skill.id = S_P4;
                }
                if (punchCounter == 4) {
                    event.skill.id = S_P5;
                }
                if (punchCounter == 5) {
                    event.skill.id = S_P6;
                }
                if (punchCounter == 6) {
                    event.skill.id = S_P7;
                }
            }

            if (job == JOB_NINJA && event.skill.id == S_P) {
                disabSkill[S_P] = true;
                var timer = setTimeout(function () { disabSkill[S_P] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                disabSkill[(S_P + 30)] = true;
                var timer2 = setTimeout(function () { disabSkill[(S_P + 30)] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                fakeEnd_sorc_dist(event, S_P_D, 0);
                clearTimeout(clearPunchCounter);
                punchCounter++;
                clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P_D);
            }

            if (job == JOB_NINJA && event.skill.id == S_P2) {
                var timer = setTimeout(function () { disabSkill[S_P] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                disabSkill[(S_P + 30)] = true;
                var timer2 = setTimeout(function () { disabSkill[(S_P + 30)] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                fakeEnd_sorc_dist(event, S_P2_D, 0);
                clearTimeout(clearPunchCounter);
                punchCounter++;
                clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P2_D);
            }
            if (job == JOB_NINJA && event.skill.id == S_P3) {
                var timer = setTimeout(function () { disabSkill[S_P] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                disabSkill[(S_P + 30)] = true;
                var timer2 = setTimeout(function () { disabSkill[(S_P + 30)] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                fakeEnd_sorc_dist(event, S_P3_D, 0);
                clearTimeout(clearPunchCounter);
                punchCounter++;
                clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P3_D);
            }
            if (job == JOB_NINJA && event.skill.id == S_P4) {
                var timer = setTimeout(function () { disabSkill[S_P] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                disabSkill[(S_P + 30)] = true;
                var timer2 = setTimeout(function () { disabSkill[(S_P + 30)] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                fakeEnd_sorc_dist(event, S_P4_D, 0);
                clearTimeout(clearPunchCounter);
                punchCounter++;
                clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P4_D);
            }
            if (job == JOB_NINJA && event.skill.id == S_P5) {
                var timer = setTimeout(function () { disabSkill[S_P] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                disabSkill[(S_P + 30)] = true;
                var timer2 = setTimeout(function () { disabSkill[(S_P + 30)] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                fakeEnd_sorc_dist(event, S_P5_D, 0);
                clearTimeout(clearPunchCounter);
                punchCounter++;
                clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P5_D);
            }
            if (job == JOB_NINJA && event.skill.id == S_P6) {
                var timer = setTimeout(function () { disabSkill[S_P] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                disabSkill[(S_P + 30)] = true;
                var timer2 = setTimeout(function () { disabSkill[(S_P + 30)] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                fakeEnd_sorc_dist(event, S_P6_D, 0);
                clearTimeout(clearPunchCounter);
                punchCounter++;
                clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P6_D);
            }
            if (job == JOB_NINJA && event.skill.id == S_P7) {
                var timer = setTimeout(function () { disabSkill[S_P] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                disabSkill[(S_P + 30)] = true;
                var timer2 = setTimeout(function () { disabSkill[(S_P + 30)] = false; }, GLOBAL_LOCK_DELAY / glitchAA);
                fakeEnd_sorc_dist(event, S_P7_D, 0);
                clearTimeout(clearPunchCounter);
                punchCounter = 0;
                clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P7_D);
            }
            if (job == JOB_NINJA && event.skill.id == S_RETAL) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_RETAL] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_RETAL_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == (S_OneThousand - 1)) {
                disabSkill[(S_OneThousand - 1)] = true;
                var timer = setTimeout(function () { disabSkill[(S_OneThousand - 1)] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_OneThousandDash_D, 0);
            }
            if (job == JOB_NINJA && event.skill.id == (S_OneThousand + 29)) {
                disabSkill[(S_OneThousand + 29)] = true;
                var timer = setTimeout(function () { disabSkill[(S_OneThousand + 29)] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_OneThousandDash_D, 0);
            }

            if (job == JOB_NINJA && (event.skill.id == S_Shadow || event.skill.id == S_Shadow + 30)) {
                fakeEnd_sorc_dist(event, S_Shadow_D, S_Shadow_Dist);
            }

            if (job == JOB_NINJA && event.skill.id == S_Leaves2) {
                setTimeout(function (event) { if (lastSkill != event.skill.id) { return; } dispatch.toServer('C_START_SKILL', 7, event); }, 25, event);
                setTimeout(function (event) { if (lastSkill != event.skill.id) { return; } dispatch.toServer('C_START_SKILL', 7, event); }, 50, event);
                setTimeout(function (event) { if (lastSkill != event.skill.id) { return; } dispatch.toServer('C_START_SKILL', 7, event); }, 75, event);
                setTimeout(function (event) { if (lastSkill != event.skill.id) { return; } dispatch.toServer('C_START_SKILL', 7, event); }, 100, event);
                disabSkill[S_Leaves] = true;
                var timer = setTimeout(function () { disabSkill[S_Leaves] = false; }, GLOBAL_LOCK_DELAY);
                disabSkill[S_STUPID_KUNAI] = false;
                disabSkill[S_Leaves2] = true;
                var timer2 = setTimeout(function () { disabSkill[S_Leaves2] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_Leaves_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Leaves) {
                setTimeout(function (event) { if (lastSkill != event.skill.id) { return; } dispatch.toServer('C_START_SKILL', 7, event); }, 25, event);
                setTimeout(function (event) { if (lastSkill != event.skill.id) { return; } dispatch.toServer('C_START_SKILL', 7, event); }, 50, event);
                setTimeout(function (event) { if (lastSkill != event.skill.id) { return; } dispatch.toServer('C_START_SKILL', 7, event); }, 75, event);
                setTimeout(function (event) { if (lastSkill != event.skill.id) { return; } dispatch.toServer('C_START_SKILL', 7, event); }, 100, event);
                disabSkill[S_Leaves] = true;
                var timer = setTimeout(function () { disabSkill[S_Leaves] = false; }, GLOBAL_LOCK_DELAY);
                disabSkill[S_STUPID_KUNAI] = false;
                disabSkill[S_Leaves2] = true;
                var timer2 = setTimeout(function () { disabSkill[S_Leaves2] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_Leaves_D, 0);
            }

            if (job == JOB_NINJA && (event.skill.id == S_Bomb || (event.skill.id == S_Bomb + 30))) {
                disabSkill[S_Bomb] = true;
                disabSkill[(S_Bomb + 30)] = true;
                var timer = setTimeout(function () { disabSkill[S_Bomb] = false; }, GLOBAL_LOCK_DELAY * 2);
                var timer2 = setTimeout(function () { disabSkill[(S_Bomb + 30)] = false; }, GLOBAL_LOCK_DELAY * 2);
                fakeEnd_sorc_dist(event, S_Bomb_D, S_Bomb_Dist);
            }
			
			if (job == JOB_NINJA && (event.skill.id == S_Bomb_Gly || (event.skill.id == S_Bomb_Gly + 30))) {
				setTimeout(function (event) { if (lastSkill != event.skill.id) { return; } dispatch.toServer('C_START_SKILL', 7, event); }, 25, event);
                setTimeout(function (event) { if (lastSkill != event.skill.id) { return; } dispatch.toServer('C_START_SKILL', 7, event); }, 50, event);
                setTimeout(function (event) { if (lastSkill != event.skill.id) { return; } dispatch.toServer('C_START_SKILL', 7, event); }, 75, event);
                setTimeout(function (event) { if (lastSkill != event.skill.id) { return; } dispatch.toServer('C_START_SKILL', 7, event); }, 100, event);
                disabSkill[S_Bomb_Gly] = true;
				disabSkill[(S_Bomb_Gly + 30)] = true;
                var timer = setTimeout(function () { disabSkill[S_Bomb_Gly] = false; }, GLOBAL_LOCK_DELAY * 2);
				var timer2 = setTimeout(function () { disabSkill[(S_Bomb_Gly + 30)] = false; }, GLOBAL_LOCK_DELAY * 2);
                fakeEnd_sorc_dist(event, S_Bomb_D, S_Bomb_Dist);
            }

            if (job == JOB_NINJA && event.skill.id == S_OneThousand_2 && lastSkill != S_Shadow && lastSkill != (S_Shadow + 30)) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_OneThousand_2] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_OneThousand_2_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Smoke) {
                disabSkill[S_Smoke] = true;
                var timer = setTimeout(function () { disabSkill[S_Smoke] = false; }, GLOBAL_LOCK_DELAY * 2);
                disabSkill[S_Smoke2] = true;
                var timer = setTimeout(function () { disabSkill[S_Smoke2] = false; }, GLOBAL_LOCK_DELAY * 2);
                fakeEnd_sorc_dist(event, S_Smoke_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Smoke2) {
                disabSkill[S_Smoke] = true;
                var timer = setTimeout(function () { disabSkill[S_Smoke] = false; }, GLOBAL_LOCK_DELAY * 2);
                disabSkill[S_Smoke2] = true;
                var timer = setTimeout(function () { disabSkill[S_Smoke2] = false; }, GLOBAL_LOCK_DELAY * 2);
                fakeEnd_sorc_dist(event, S_Smoke_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_ENLIGHTEN) {
                disabSkill[S_ENLIGHTEN] = true;
                var timer = setTimeout(function () { disabSkill[S_ENLIGHTEN] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_ENLIGHTEN_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_LIGHTNING_T) {
                setTimeout(function (event) { if(lastSkill == event.skill.id){dispatch.toServer('C_START_SKILL', 7, event); }}, 25, event);
                setTimeout(function (event) { if(lastSkill == event.skill.id){dispatch.toServer('C_START_SKILL', 7, event); }}, 50, event);
                setTimeout(function (event) { if(lastSkill == event.skill.id){dispatch.toServer('C_START_SKILL', 7, event); }}, 75, event);
                setTimeout(function (event) { if(lastSkill == event.skill.id){dispatch.toServer('C_START_SKILL', 7, event); }}, 100, event);
                disabSkill[S_LIGHTNING_T] = true;
                var timer = setTimeout(function () { disabSkill[S_LIGHTNING_T] = false; }, GLOBAL_LOCK_DELAY * 2);
                fakeEnd_sorc_dist(event, S_LIGHTNING_T_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_LIGHTNING_T_BUDDHA) {
                //setTimeout(function (event) { if(lastSkill == event.skill.id && !yen){dispatch.toServer('C_START_SKILL', 7, event); }}, 25, event);
                //setTimeout(function (event) { if(lastSkill == event.skill.id && !yen){dispatch.toServer('C_START_SKILL', 7, event); }}, 50, event);
                //setTimeout(function (event) { if(lastSkill == event.skill.id && !yen){dispatch.toServer('C_START_SKILL', 7, event); }}, 75, event);
                //setTimeout(function (event) { if(lastSkill == event.skill.id && !yen){dispatch.toServer('C_START_SKILL', 7, event); }}, 100, event);
                disabSkill[S_LIGHTNING_T_BUDDHA] = true;
                var timer = setTimeout(function () { disabSkill[S_LIGHTNING_T_BUDDHA] = false; }, GLOBAL_LOCK_DELAY * 2);
                fakeEnd_sorc_dist(event, S_LIGHTNING_T_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_STUPID_KUNAI) {
                if (!trig3) {
                    setTimeout(function (event) { if(lastSkill == event.skill.id){dispatch.toServer('C_START_SKILL', 7, event); }}, 25, event);
                    setTimeout(function (event) { if(lastSkill == event.skill.id){dispatch.toServer('C_START_SKILL', 7, event); }}, 50, event);
                    //setTimeout(function (event) { if(lastSkill == event.skill.id){dispatch.toServer('C_START_SKILL', 7, event); }}, 75, event);
                    //setTimeout(function (event) { if(lastSkill == event.skill.id){dispatch.toServer('C_START_SKILL', 7, event); }}, 100, event);
                }
                disabSkill[S_STUPID_KUNAI] = true;
                var timer = setTimeout(function () { disabSkill[S_STUPID_KUNAI] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_STUPID_KUNAI_D1, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Focus) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Focus] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_Focus_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Focus2) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Focus2] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_Focus_D, 0);
            }

            if (job == JOB_NINJA && (event.skill.id == S_Skyfall || event.skill.id == (S_Skyfall + 1) || event.skill.id == (S_Skyfall + 2) || event.skill.id == (S_Skyfall + 30))) {
                disabSkill[S_Skyfall] = true;
                disabSkill[(S_Skyfall + 1)] = true;
                disabSkill[(S_Skyfall + 2)] = true;
                disabSkill[(S_Skyfall + 30)] = true;
                var timer = setTimeout(function () { disabSkill[S_Skyfall] = false; }, GLOBAL_LOCK_DELAY);
                var timer2 = setTimeout(function () { disabSkill[(S_Skyfall + 1)] = false; }, GLOBAL_LOCK_DELAY);
                var timer3 = setTimeout(function () { disabSkill[(S_Skyfall + 2)] = false; }, GLOBAL_LOCK_DELAY);
                var timer4 = setTimeout(function () { disabSkill[(S_Skyfall + 30)] = false; }, GLOBAL_LOCK_DELAY);
                event.skill.id = S_Skyfall + 1;
                fakeEnd_sorc_dist(event, S_Skyfall_D, S_Skyfall_Dist);
            }

            if (job == JOB_NINJA && (event.skill.id == S_COS || event.skill.id == (S_COS + 1) || event.skill.id == (S_COS + 2) || event.skill.id == (S_COS + 30))) {
                disabSkill[S_COS] = true;
                disabSkill[(S_COS + 1)] = true;
                disabSkill[(S_COS + 2)] = true;
                disabSkill[(S_COS + 30)] = true;
                var timer = setTimeout(function () { disabSkill[S_COS] = false; }, GLOBAL_LOCK_DELAY);
                var timer2 = setTimeout(function () { disabSkill[(S_COS + 1)] = false; }, GLOBAL_LOCK_DELAY);
                var timer3 = setTimeout(function () { disabSkill[(S_COS + 2)] = false; }, GLOBAL_LOCK_DELAY);
                var timer4 = setTimeout(function () { disabSkill[(S_COS + 30)] = false; }, GLOBAL_LOCK_DELAY);
                event.skill.id = S_COS + 1;
                fakeEnd_sorc_dist(event, S_COS_D, S_COS_Dist);
            }

            if (job == JOB_NINJA && (event.skill.id == S_DoubleCut || event.skill.id == (S_DoubleCut + 1) || event.skill.id == (S_DoubleCut + 2) || event.skill.id == (S_DoubleCut + 30))) {
                disabSkill[S_DoubleCut] = true;
                disabSkill[(S_DoubleCut + 1)] = true;
                disabSkill[(S_DoubleCut + 2)] = true;
                disabSkill[(S_DoubleCut + 30)] = true;
                var timer = setTimeout(function () { disabSkill[S_DoubleCut] = false; }, GLOBAL_LOCK_DELAY);
                var timer2 = setTimeout(function () { disabSkill[(S_DoubleCut + 1)] = false; }, GLOBAL_LOCK_DELAY);
                var timer3 = setTimeout(function () { disabSkill[(S_DoubleCut + 2)] = false; }, GLOBAL_LOCK_DELAY);
                var timer4 = setTimeout(function () { disabSkill[(S_DoubleCut + 30)] = false; }, GLOBAL_LOCK_DELAY);
                event.skill.id = S_DoubleCut + 1;
                fakeEnd_sorc_dist(event, S_DoubleCut_D, S_DoubleCut_Dist);
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning_Buddha) {
				setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); }, 25);
                setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); }, 50);
                setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); }, 75);
                setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); }, 100);
                disabSkill[S_Burning_Buddha] = true;
                var timer = setTimeout(function () { disabSkill[S_Burning_Buddha] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_Burning_Buddha_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning) {
                BHStage = 150699;
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Burning] = false; }, 0);
                fakeEnd_sorc_dist(event, S_Burning_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning2) {
                if (BH_ANTI_GHOST) {
                    BHStage = 150700;
                }
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Burning2] = false; }, 0);
                fakeEnd_sorc_dist(event, S_Burning_D2, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning3) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Burning3] = false; }, 0);
                fakeEnd_sorc_dist(event, S_Burning_D2, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning4) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Burning4] = false; }, 0);
                fakeEnd_sorc_dist(event, S_Burning_D2, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning5) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Burning5] = false; }, 0);
                fakeEnd_sorc_dist(event, S_Burning_D2, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning6) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Burning6] = false; }, 0);
                fakeEnd_sorc_dist(event, S_Burning_D2, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning7) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Burning7] = false; }, 0);
                fakeEnd_sorc_dist(event, S_Burning_D2, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning8) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Burning8] = false; }, 0);
                fakeEnd_sorc_dist(event, S_Burning_D2, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning9) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Burning9] = false; }, 0);
                fakeEnd_sorc_dist(event, S_Burning_D2, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning10) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Burning10] = false; }, 0);
                fakeEnd_sorc_dist(event, S_Burning_D2, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Death) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Death] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_Death_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Attune) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Attune] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_Attune_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Blade) {
                disabSkill[S_Blade] = true;
                var timer = setTimeout(function () { disabSkill[S_Blade] = false; }, GLOBAL_LOCK_DELAY);
                disabSkill[S_Blade2] = true;
                var timer = setTimeout(function () { disabSkill[S_Blade2] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_Blade_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Blade2) {
                disabSkill[S_Blade] = true;
                var timer = setTimeout(function () { disabSkill[S_Blade] = false; }, GLOBAL_LOCK_DELAY);
                disabSkill[S_Blade2] = true;
                var timer = setTimeout(function () { disabSkill[S_Blade2] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_Blade_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Jagged_2) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Jagged_2] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_Jagged_2_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Jagged_3) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Jagged_3] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_Jagged_3_D, 0);
            }

            if (job == JOB_NINJA && event.skill.id == S_Fire_Buddha) {
                disabSkill[S_Fire_Buddha] = true;
                setTimeout(function () { disabSkill[S_Fire_Buddha] = false; }, (S_Fire_Buddha_D1 + S_Fire_Buddha_D2 + 1000) / aspd);
                fakeEnd_sorc_dist(event, (S_Fire_Buddha_D1 + S_Fire_Buddha_D2), 0);
                setTimeout(function (event) {
                    if (event.skill.id != lastSkill) { return; }
                    dispatch.toClient('S_ACTION_STAGE', 9, {
                        gameId: cid,
                        loc: {
                            x: xloc || event.loc.x,
                            y: yloc || event.loc.y,
                            z: zloc || event.loc.z
                        },
                        w: event.w,
                        templateId: model,
                        skill: event.skill.id,
                        stage: 1,
                        speed: aspd,
                        projectileSpeed: aspd,
                        id: atkid[event.skill.id],
                        effectScale: 1.0, moving: false, dest: { x: 0, y: 0, z: 0 }, target: 0n, animSeq: [],
                    });

                }, S_Fire_Buddha_D1 / aspd, event);
            }

            if (job == JOB_NINJA && event.skill.id == S_Chakra) {
                clearTimeout(chakraTimer);
                disabSkill[S_Chakra] = true;
                var timer = setTimeout(function () { disabSkill[S_Chakra] = false; }, GLOBAL_LOCK_DELAY);
                disabSkill[(S_Chakra + 30)] = true;
                var timer2 = setTimeout(function () { disabSkill[(S_Chakra + 30)] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, (S_Chakra_D + S_Chakra_D2), 0);
                chakraTimer = setTimeout(function (event) {
                    if (event.skill.id != lastSkill) { return; }
                    dispatch.toClient('S_ACTION_STAGE', 9, {
                        gameId: cid,
                        loc: {
                            x: xloc || event.loc.x,
                            y: yloc || event.loc.y,
                            z: zloc || event.loc.z
                        },
                        w: event.w,
                        templateId: model,
                        skill: event.skill.id,
                        stage: 1,
                        speed: aspd,
                        projectileSpeed: aspd,
                        id: atkid[event.skill.id],
                        effectScale: 1.0, moving: false, dest: { x: 0, y: 0, z: 0 }, target: 0n, animSeq: [],
                    });

                }, S_Chakra_D / aspd, event);
            }

            if (job == JOB_NINJA && event.skill.id == (S_Chakra + 30)) {
                clearTimeout(chakraTimer);
                disabSkill[S_Chakra] = true;
                var timer = setTimeout(function () { disabSkill[S_Chakra] = false; }, GLOBAL_LOCK_DELAY);
                disabSkill[(S_Chakra + 30)] = true;
                var timer2 = setTimeout(function () { disabSkill[(S_Chakra + 30)] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, (S_Chakra_D + S_Chakra_D2), 0);
                chakraTimer = setTimeout(function (event) {
                    if (event.skill.id != lastSkill) { return; }
                    dispatch.toClient('S_ACTION_STAGE', 9, {
                        gameId: cid,
                        loc: {
                            x: xloc || event.loc.x,
                            y: yloc || event.loc.y,
                            z: zloc || event.loc.z
                        },
                        w: event.w,
                        templateId: model,
                        skill: event.skill.id,
                        stage: 1,
                        speed: aspd,
                        projectileSpeed: aspd,
                        id: atkid[event.skill.id],
                        effectScale: 1.0, moving: false, dest: { x: 0, y: 0, z: 0 }, target: 0n, animSeq: [],
                    });

                }, S_Chakra_D / aspd, event);
            }
            if (job == JOB_NINJA && (event.skill.id == S_Fire || event.skill.id == (S_Fire + 1))) {
                disabSkill[S_Fire] = true;
                disabSkill[(S_Fire + 1)] = true;
                var timer = setTimeout(function () { disabSkill[(S_Fire + 1)] = false; }, GLOBAL_LOCK_DELAY * 1.2 / aspd);
                var timer2 = setTimeout(function () { disabSkill[S_Fire] = false; }, GLOBAL_LOCK_DELAY * 1.2 / aspd);
                if (FA2 == true) {
                    if (lastFA == 3) { return; }
                    event.skill.id = S_Fire_3;
                    FA1 = false;
                    FA2 = false;
                }
                else if (FA1 == true) {
                    if (lastFA == 2) { return; }
                    lastFA = 2;
                    FA2 = true;
                    event.skill.id = S_Fire_2;
                    dispatch.toClient('S_ABNORMALITY_END', 1, {
                        target: cid,
                        id: 10154080,
                    });
                    dispatch.toClient('S_ABNORMALITY_BEGIN', 5, {
                        target: cid,
                        source: cid,
                        id: 10154081,
                        duration: 3000,
                        unk: 0,
                        stacks: 1,
                        unk2: 0,
                        unk3: 0,
                    });
                }
                else {
                    if (lastFA == 1) { return; }
                    FA1 = true;
                    lastFA = 1;
                    setTimeout(function () { lastFA = 5; }, 20000);
                    event.skill.id = S_Fire;
                    dispatch.toClient('S_ABNORMALITY_BEGIN', 5, {
                        target: cid,
                        source: cid,
                        id: 10154080,
                        duration: 3000,
                        unk: 0,
                        stacks: 1,
                        unk2: 0,
                        unk3: 0,
                    });
                }
            }

            if (job == JOB_NINJA && (event.skill.id == S_Fire || event.skill.id == (S_Fire + 1))) {
                event.skill.id = S_Fire;
                fakeEnd_sorc_dist(event, (S_Fire_D + S_Fire_D2 + S_Fire_D3), S_Fire_Dist);
                var aac = 1;
                if (blazing) { aac = 1.3; }
                var aad = aspd * aac;
                Fire1T = setTimeout(function (event) {
                    dispatch.toClient('S_ACTION_STAGE', 9, {
                        gameId: cid,
                        loc: {
                            x: xloc || event.loc.x,
                            y: yloc || event.loc.y,
                            z: zloc || event.loc.z
                        },
                        w: event.w,
                        templateId: model,
                        skill: event.skill.id,
                        stage: 1,
                        speed: aad,
                        projectileSpeed: aad,
                        id: atkid[event.skill.id],
                        effectScale: 1.0, moving: false, dest: { x: 0, y: 0, z: 0 }, target: 0n, animSeq: [],
                    });

                }, S_Fire_D / aad, event);
                Fire2T = setTimeout(function (event) {
                    if (lastSkill != S_Fire) { return; }
                    var newX;
                    var newY;
                    var angle = parseFloat(event.w);

                    newX = Math.cos(angle) * 400;
                    newY = Math.sin(angle) * 400;
                    dispatch.toClient('S_ACTION_STAGE', 9, {
                        gameId: cid,
                        loc: {
                            x: xloc || (event.loc.x + newX),
                            y: yloc || (event.loc.y + newY),
                            z: zloc || (event.loc.z + 2)
                        },
                        w: event.w,
                        templateId: model,
                        skill: event.skill.id,
                        stage: 2,
                        speed: aad,
                        projectileSpeed: aad,
                        id: atkid[event.skill.id],
                        effectScale: 1.0, moving: false, dest: { x: 0, y: 0, z: 0 }, target: 0n, animSeq: [],
                    });

                }, (S_Fire_D + S_Fire_D2) / aad, event);
            }

            if (job == JOB_NINJA && (event.skill.id == S_Fire_2)) {
                fakeEnd_sorc_dist(event, (S_Fire_D2 + S_Fire_D3), S_Fire_Dist);
                var aac = 1;
                if (blazing) { aac = 1.3; }
                var aad = aspd * aac;
                Fire1T = setTimeout(function (event) {
                    if (lastSkill != S_Fire_2) { return; }
                    var newX;
                    var newY;
                    var angle = parseFloat(event.w);

                    newX = Math.cos(angle) * 400;
                    newY = Math.sin(angle) * 400;
                    dispatch.toClient('S_ACTION_STAGE', 9, {
                        gameId: cid,
                        loc: {
                            x: xloc || (event.loc.x + newX),
                            y: yloc || (event.loc.y + newY),
                            z: zloc || (event.loc.z + 2)
                        },
                        w: event.w,
                        templateId: model,
                        skill: event.skill.id,
                        stage: 1,
                        speed: aad,
                        projectileSpeed: aad,
                        id: atkid[event.skill.id],
                        effectScale: 1.0, moving: false, dest: { x: 0, y: 0, z: 0 }, target: 0n, animSeq: [],
                    });

                }, S_Fire_D2 / aad, event);
            }

            if (job == JOB_NINJA && (event.skill.id == S_Fire_3)) {
                lastFA = 3;
                fakeEnd_sorc_dist(event, (S_Fire_D2 + S_Fire_D3), S_Fire_Dist);
                var aac = 1;
                if (blazing) { aac = 1.3; }
                var aad = aspd * aac;
                Fire1T = setTimeout(function (event) {
                    if (lastSkill != S_Fire_3) { return; }
                    var newX;
                    var newY;
                    var angle = parseFloat(event.w);

                    newX = Math.cos(angle) * 400;
                    newY = Math.sin(angle) * 400;
                    dispatch.toClient('S_ACTION_STAGE', 9, {
                        gameId: cid,
                        loc: {
                            x: xloc || (event.loc.x + newX),
                            y: yloc || (event.loc.y + newY),
                            z: zloc || (event.loc.z + 2)
                        },
                        w: event.w,
                        templateId: model,
                        skill: event.skill.id,
                        stage: 1,
                        speed: aad,
                        projectileSpeed: aad,
                        id: atkid[event.skill.id],
                        effectScale: 1.0, moving: false, dest: { x: 0, y: 0, z: 0 }, target: 0n, animSeq: [],
                    });

                }, S_Fire_D2 / aad, event);
            }

            if (job == JOB_NINJA && event.skill.id == S_Clone) {
                disabSkill[event.skill.id] = true;
                var timer = setTimeout(function () { disabSkill[S_Clone] = false; }, GLOBAL_LOCK_DELAY);
                fakeEnd_sorc_dist(event, S_Clone_D, 0);
            }

            lastLastSkill = lastSkill;
            lastSkill = event.skill.id;
            lastEvent = event;
            if (lastSkill == S_Chakra && CHAKRA_QUICK_ATTACK) {
                setTimeout(function () {
                    failsafe = 0;
                    repeater(QUICK_ATTACK_KEY, S_Chakra);
                }, 10);
            }
            if (lastSkill == (S_Chakra + 30) && CHAKRA_QUICK_ATTACK) {
                setTimeout(function () {
                    failsafe = 0;
                    repeater(QUICK_ATTACK_KEY, (S_Chakra + 30));
                }, 10);
            }
        }
    });

    function repeater(key, trigger) {
        if (lastSkill == trigger && failsafe < 400) {
            failsafe++;
            var robot17 = require("robotjs");
            robot17.keyTap(key);
            setTimeout(function (key, trigger) { repeater(key, trigger); }, 10, key, trigger);
        }
    }

    dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67108949);
        if (!enabled) return;
        if(event.gameId === cid) {
            var d = new Date();
            lastSkillTime[1] = d.getTime();
            lastSkillTime[3] = event.skill.id;
            var xzzy = event.skill.type === 1;
            if ((!xzzy) && event.skill.id != S_STUPID_KUNAI_PROJ_1 && event.skill.id != S_STUPID_KUNAI_PROJ_2) {
                lastSkill = 1;
                jagLock = true;
            }
            if (xzzy) {
                actionsync = event.skill.id;
            }
            if (event.skill.id != S_STUPID_KUNAI_PROJ_1 && event.skill.id != S_STUPID_KUNAI_PROJ_2) {
                BHStage = event.skill.id;
            }

            //console.log("Stage "+event.skill.id+" "+event.stage+" "+event.speed);
            if (job == JOB_NINJA && event.skill.id == S_P_Bug) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 30)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 1)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 2)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 3)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 4)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 5)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 6)) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_P) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P + 30)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_P2) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_P3) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_P4) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_P5) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_P6) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_P7) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_RETAL) {
                if (Ignore1) {
                    fakeEnd_sorc_dist(event, S_RETAL_D, 0);
                    lastSkill = S_RETAL;
                }
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_Shadow || event.skill.id == S_Shadow + 30)) {
                if (DISABLE_IFRAME_EMULATION) {
                    return;
                }
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Leaves) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Leaves2) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_Jagged || event.skill.id == (S_Jagged + 1))) {
                return false;
                clearTimeout(timer[lastLastSkill]);
                //force_end(event, lastLastSkill, 6);
                lastSkill = 5;
            }

            if (job == JOB_NINJA && event.skill.id == (S_Jagged - 1)) {
                return false;
                clearTimeout(timer[lastLastSkill]);
                //force_end(event, lastLastSkill, 6);
                lastSkill = 5;
            }

            if (job == JOB_NINJA && event.skill.id == S_Jagged_2) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Jagged_3) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_Bomb || event.skill.id == S_Bomb_Gly || (event.skill.id == S_Bomb + 30) || (event.skill.id == S_Bomb_Gly + 30))) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_OneThousand) {
                if (DISABLE_IFRAME_EMULATION) {
                    return;
                }
                if (DISABLE_1K_EMULATION) {
                    return;
                }
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == (S_OneThousand - 1)) {
                if (DISABLE_IFRAME_EMULATION) {
                    return;
                }
                if (DISABLE_1K_EMULATION) {
                    return;
                }
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == (S_OneThousand + 29)) {
                if (DISABLE_IFRAME_EMULATION) {
                    return;
                }
                if (DISABLE_1K_EMULATION) {
                    return;
                }
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_OneThousand_2) {
                if (DISABLE_IFRAME_EMULATION) {
                    return;
                }
                if (DISABLE_1K_EMULATION) {
                    return;
                }
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Decoy) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Smoke) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Smoke2) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_ENLIGHTEN) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_LIGHTNING_T || event.skill.id == (S_LIGHTNING_T + 10) || event.skill.id == (S_LIGHTNING_T + 20))) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_LIGHTNING_T_BUDDHA || event.skill.id == (S_LIGHTNING_T_BUDDHA + 10) || event.skill.id == (S_LIGHTNING_T_BUDDHA + 20))) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_STUPID_KUNAI || event.skill.id == (S_STUPID_KUNAI + 11) || event.skill.id == (S_STUPID_KUNAI + 50))) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == (S_STUPID_KUNAI + 12) || event.skill.id == (S_STUPID_KUNAI + 13) || event.skill.id == (S_STUPID_KUNAI + 51))) {
                return false;
            }
			
			if (job == JOB_NINJA && (event.skill.id == (S_STUPID_KUNAI + 14) || event.skill.id == (S_STUPID_KUNAI + 15) || event.skill.id == (S_STUPID_KUNAI + 16) || event.skill.id == (S_STUPID_KUNAI + 17) || event.skill.id == (S_STUPID_KUNAI + 18))) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Focus) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Focus2) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_Skyfall || event.skill.id == (S_Skyfall + 1) || event.skill.id == (S_Skyfall + 2) || event.skill.id == (S_Skyfall + 30))) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_COS || event.skill.id == (S_COS + 1) || event.skill.id == (S_COS + 2) || event.skill.id == (S_COS + 30))) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_DoubleCut || event.skill.id == (S_DoubleCut + 1) || event.skill.id == (S_DoubleCut + 2) || event.skill.id == (S_DoubleCut + 30))) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning_Buddha) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning2) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning3) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning4) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning5) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning6) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning7) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning8) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning9) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning10) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Death) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == (S_Death + 30)) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Attune) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == (S_Attune + 30)) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Blade) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Blade2) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Fire_Buddha) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == (S_Fire_Buddha + 1)) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Chakra) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == (S_Chakra + 30)) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Clone) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_Fire || event.skill.id == (S_Fire + 1) || event.skill.id == S_Fire_2 || event.skill.id == S_Fire_3)) {
                return false;
            }
        }
    });
	
	dispatch.hook('S_ACTION_END', 5, { order: 99999, filter: { fake: true } }, (event) => {
	  if(event.skill == 67108859) console.log("error");
		if (!enabled) return;
		if(event.gameId === cid) {
			if (job == JOB_NINJA && (lastSkill == S_Bomb || lastSkill == S_Bomb_Gly || lastSkill == (S_Bomb + 30) || lastSkill == (S_Bomb_Gly + 30)) && (event.skill.id != S_Bomb && event.skill.id != S_Bomb_Gly && event.skill.id != (S_Bomb + 30) && event.skill.id != (S_Bomb_Gly + 30))){
				return false;
			}
		}
	});

    dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108859) console.log("error");
        if (!enabled) return;
        if(event.gameId === cid) {
            var d = new Date();
            lastSkillTime[2] = d.getTime();

            //console.log("End "+event.skill.id);
            var xzzy = event.skill.type === 1;
            if (!xzzy) {
                jagLock = false;
            }
			if (job == JOB_NINJA && (lastSkill == S_Bomb || lastSkill == S_Bomb_Gly || lastSkill == (S_Bomb + 30) || lastSkill == (S_Bomb_Gly + 30)) && (event.skill.id != S_Bomb && event.skill.id != S_Bomb_Gly && event.skill.id != (S_Bomb + 30) && event.skill.id != (S_Bomb_Gly + 30))){
				return false;
			}
            if (job == JOB_NINJA && event.skill.id == S_P_Bug) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 30)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 1)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 2)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 3)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 4)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 5)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P_Bug + 6)) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_P) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == (S_P + 30)) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_P2) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_P3) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_P4) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_P5) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_P6) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_P7) {
                return false;
            }
            if (job == JOB_NINJA && event.skill.id == S_RETAL) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_Shadow || event.skill.id == S_Shadow + 30)) {
                if (DISABLE_IFRAME_EMULATION && (lastSkill == S_Shadow || lastSkill == (S_Shadow + 30))) {
                    return;
                }
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Leaves) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Leaves2) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Jagged && lastSkill != S_Jagged) {
                return false;
            }
			
			if (job == JOB_NINJA && event.skill.id == (S_Jagged + 1) && lastSkill != S_Jagged) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == (S_Jagged - 1) && lastSkill != S_Jagged) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Jagged_2 && lastSkill != S_Jagged_2) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Jagged_3 && lastSkill != S_Jagged_3) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_Bomb || event.skill.id == S_Bomb_Gly || (event.skill.id == S_Bomb + 30) || (event.skill.id == S_Bomb_Gly + 30))) {
                if (((event.loc.z - zloc2) > 50) || ((zloc2 - event.loc.z) > 50)) {
                    dispatch.toClient('S_INSTANT_MOVE', 3, {
                        gameId: cid,
                        loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                        w: event.w,
                    });
                }
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_OneThousand) {
                if (DISABLE_IFRAME_EMULATION && (lastSkill == S_OneThousand || lastSkill == (S_OneThousand + 29) || lastSkill == (S_OneThousand - 1) || lastSkill == S_OneThousand_2)) {
                    return;
                }
                if (DISABLE_1K_EMULATION) {
                    return;
                }
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == (S_OneThousand - 1)) {
                if (DISABLE_IFRAME_EMULATION && (lastSkill == S_OneThousand || lastSkill == (S_OneThousand + 29) || lastSkill == (S_OneThousand - 1) || lastSkill == S_OneThousand_2)) {
                    return;
                }
                if (DISABLE_1K_EMULATION) {
                    return;
                }
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == (S_OneThousand + 29)) {
                if (DISABLE_IFRAME_EMULATION && (lastSkill == S_OneThousand || lastSkill == (S_OneThousand + 29) || lastSkill == (S_OneThousand - 1) || lastSkill == S_OneThousand_2)) {
                    return;
                }
                if (DISABLE_1K_EMULATION) {
                    return;
                }
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_OneThousand_2) {
                if (DISABLE_IFRAME_EMULATION && (lastSkill == S_OneThousand || lastSkill == (S_OneThousand + 29) || lastSkill == (S_OneThousand - 1) || lastSkill == S_OneThousand_2)) {
                    return;
                }
                if (DISABLE_1K_EMULATION) {
                    return;
                }
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Decoy && lastSkill != S_Decoy) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Smoke) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Smoke2) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_ENLIGHTEN) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_LIGHTNING_T || event.skill.id == (S_LIGHTNING_T + 10) || event.skill.id == (S_LIGHTNING_T + 20))) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_LIGHTNING_T_BUDDHA || event.skill.id == (S_LIGHTNING_T_BUDDHA + 10) || event.skill.id == (S_LIGHTNING_T_BUDDHA + 20))) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_STUPID_KUNAI || event.skill.id == (S_STUPID_KUNAI + 11) || event.skill.id == (S_STUPID_KUNAI + 50))) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == (S_STUPID_KUNAI + 12) || event.skill.id == (S_STUPID_KUNAI + 13) || event.skill.id == (S_STUPID_KUNAI + 51))) {
                return false;
            }
			
			if (job == JOB_NINJA && (event.skill.id == (S_STUPID_KUNAI + 14) || event.skill.id == (S_STUPID_KUNAI + 15) || event.skill.id == (S_STUPID_KUNAI + 16) || event.skill.id == (S_STUPID_KUNAI + 17) || event.skill.id == (S_STUPID_KUNAI + 18))) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Focus) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Focus2) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_Skyfall || event.skill.id == (S_Skyfall + 1) || event.skill.id == (S_Skyfall + 2) || event.skill.id == (S_Skyfall + 30))) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_COS || event.skill.id == (S_COS + 1) || event.skill.id == (S_COS + 2) || event.skill.id == (S_COS + 30))) {
                return false;
            }

            if (job == JOB_NINJA && (event.skill.id == S_DoubleCut || event.skill.id == (S_DoubleCut + 1) || event.skill.id == (S_DoubleCut + 2) || event.skill.id == (S_DoubleCut + 30))) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning_Buddha) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning2) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning3) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning4) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning5) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning6) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning7) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning8) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning9) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Burning10) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Death) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == (S_Death + 30)) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Attune) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == (S_Attune + 30)) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Blade) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Blade2) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Fire_Buddha) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == (S_Fire_Buddha + 1)) {
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Chakra) {
                clearTimeout(chakraTimer);
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == (S_Chakra + 30)) {
                clearTimeout(chakraTimer);
                return false;
            }

            if (job == JOB_NINJA && event.skill.id == S_Clone) {
                return false;
            }
            if (job == JOB_NINJA && (event.skill.id == S_Fire || event.skill.id == (S_Fire + 1) || event.skill.id == S_Fire_2 || event.skill.id == S_Fire_3)) {
                if (((event.loc.z - zloc2) > 50) || ((zloc2 - event.loc.z) > 50)) {
                    dispatch.toClient('S_INSTANT_MOVE', 3, {
                        gameId: cid,
                        loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                        w: event.w,
                    });
                }
                return false;
            }
        }
    });

    dispatch.hook('S_START_COOLTIME_SKILL', 3, (event) => {
        if (!enabled) return;
        event.cooldown -= GLOBAL_LATENCY;
        if (event.skill.id == S_Fire) {
            FA1 = false;
            FA2 = false;
        }
        return true;
    });


    dispatch.hook('S_PLAYER_STAT_UPDATE', dispatch.majorPatchVersion >= 106 ? 16 : 15, (event) => {
        if (!enabled) return;
        aspd = (event.attackSpeed + event.attackSpeedBonus) / 100;
    });

    dispatch.hook('S_INSTANT_MOVE', 3, (event) => {
        if (!enabled) { return };
        if(event.gameId === cid) {
            xloc = event.loc.x;
            yloc = event.loc.y;
            zloc = event.loc.z;
            wloc = event.w;
            zloc2 = event.loc.z;
        }
    });

    dispatch.hook('S_INSTANT_DASH', 3, (event) => {
        if (!enabled) { return };
        if(event.gameId === cid) {
            if (lastSkill == S_Jagged || lastSkill == S_Jagged_2 || lastSkill == S_Jagged_3 || lastSkill == S_OneThousand || lastSkill == S_OneThousand_2) {
                return false;
            }
        }
    });

    dispatch.hook('C_PLAYER_LOCATION', 5, (event) => {
        if (!enabled) return;
        timeloc = event.time + 1;
    });

    dispatch.hook('C_NOTIFY_LOCATION_IN_ACTION', 4, (event) => {
        if (!enabled) return;
        xloc = event.loc.x;
        yloc = event.loc.y;
        zloc = event.loc.z;
        wloc = event.w;
        //console.log("NLIA "+event.skill.id+" "+event.stage);
        if (event.skill.id == S_Fire) {
            dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
                skill: (S_Fire + 30),
                stage: event.stage,
                loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                w: event.w,
            });
        }
        if (event.skill.id == S_OneThousand) {
            dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
                skill: (S_OneThousand - 1),
                stage: event.stage,
                loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                w: event.w,
            });
        }
        if (event.skill.id == S_Chakra) {
            dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
                skill: (S_Chakra + 30),
                stage: event.stage,
                loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                w: event.w,
            });
        }

        if (event.skill.id == S_Fire) {
            dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
                skill: (S_Fire + 1),
                stage: event.stage,
                loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                w: event.w,
            });
        }

        if (event.skill.id == (S_Skyfall + 1)) {
            dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
                skill: (S_Skyfall),
                stage: event.stage,
                loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                w: event.w,
            });
            dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
                skill: (S_Skyfall + 2),
                stage: event.stage,
                loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                w: event.w,
            });
            dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
                skill: (S_Skyfall + 30),
                stage: event.stage,
                loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                w: event.w,
            });
        }

        if (event.skill.id == (S_COS + 1)) {
            dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
                skill: (S_COS),
                stage: event.stage,
                loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                w: event.w,
            });
            dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
                skill: (S_COS + 2),
                stage: event.stage,
                loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                w: event.w,
            });
            dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
                skill: (S_COS + 30),
                stage: event.stage,
                loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                w: event.w,
            });
        }

        if (event.skill.id == (S_DoubleCut + 1)) {
            dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
                skill: (S_DoubleCut),
                stage: event.stage,
                loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                w: event.w,
            });
            dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
                skill: (S_DoubleCut + 2),
                stage: event.stage,
                loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                w: event.w,
            });
            dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
                skill: (S_DoubleCut + 30),
                stage: event.stage,
                loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
                w: event.w,
            });
        }
    });

    dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67108949);
        if (!enabled) return;
        if (event.gameId !== cid) {
            return;
        }
        if (event.skill.id == 1080101) {
            disabSkill[S_RETAL] = true;
            Ignore1 = true;
        }
    });
    dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108859) console.log("error");
        if (!enabled) return;
        if (event.gameId !== cid) {
            return;
        }
        if (event.skill.id == 1080101) {
            disabSkill[S_RETAL] = false;
            clearTimeout(Ignore2);
            Ignore2 = setTimeout(function () { Ignore1 = false; }, 400);
        }
    });
};