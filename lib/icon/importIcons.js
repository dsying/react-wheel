/**
 * @Description: 动态加载所有svg图片
 * @author Ding Sheng
 * @date 2019-03-16
*/
let importAll = (requireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('./icons/', true, /\.svg$/))
} catch (error) {
  // console.log(error)
}