$(function(){	

	// 初期表示時は「予測する」ボタンを非表示にする
	$('#predict-button').hide();
	
	$('#upload').on('change', function (e) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$("#face-image-preview").attr('src', e.target.result);
		}
		reader.readAsDataURL(e.target.files[0]);
		
		// 「予測する」ボタンを表示する
		$('#predict-button').show();
	});
	
});