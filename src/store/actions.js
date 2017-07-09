export const SET_STAR_LIST = "set_star_list";
export const GET_STAR_LIST = "get_star_list";

export function setStarList (list) {
  return {
    type:SET_STAR_LIST,
    list:list
  }
}
export function getStarList () {
  return {
    type:GET_STAR_LIST,
  }
}