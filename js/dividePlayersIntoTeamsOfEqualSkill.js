/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    skill.sort((a, b) => a - b);
    console.log(skill);
    let chemistry = 0;
    const maxSkillByTeam = skill[0] + skill[skill.length - 1];

    console.log(`maxSkillByTeam: ${maxSkillByTeam}`);
    
    const skillLength = skill.length;
    const teams = skill.length / 2; 
    for (let index = 0; index < teams; index++) {
        if (skill[index] + skill[ skillLength - 1 - index] !== maxSkillByTeam) {
            return -1;
        } else {
            console.log(`Team: ${skill[index]} & ${skill[skillLength - 1 - index]}`);
            
            chemistry += skill[index] * skill[skillLength - 1 - index];
        }
    }    
    
    
    return chemistry;
};


/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayersUltraFast = function (skill) {
    const n = skill.length;
    const sum = skill.reduce((sum, s) => sum + s, 0);
    const teamSkill = (sum / n) * 2;
  
    const freq = {};
    for (const s of skill) freq[s] = (freq[s] || 0) + 1;
  
    let ans = 0;
  
    for (let s in freq) {
      if (!freq[s]) break;
      // si no hay la misma cantidad de jugadores que su nivel sea A + B = T, por lo tanto quedara mas de un jugador sin equipo, por la regla
      if (freq[s] !== freq[teamSkill - s]) return -1;
  
      //  Si s == teamSkill - s, significa que ambos jugadores del equipo tienen la misma habilidad (ej. si teamSkill es 10, ambos jugadores tienen habilidad 5). Como cada jugador se cuenta dos veces en este caso, el cálculo se divide por 2.
      if (s == teamSkill - s) ans += (s * (teamSkill - s) * freq[s]) / 2;
      //
      else ans += s * (teamSkill - s) * freq[s];
  
      // elimina a todos los jugadores semegantes
      freq[s] = 0;
      freq[teamSkill - s] = 0;
    }
  
    return ans;
};

let  skill = [3,2,5,1,3,4];// 22
skill = [3,4];//12
skill = [1, 1, 2, 3];//-1
skill = [5,7,6,2,4,6];//-1
skill = [13,1,14,3,2,15]// 82




console.log(`output: ${dividePlayers(skill)}`);
