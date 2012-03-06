function tag() {
	var args = Array.prototype.slice.call(arguments); 
	var tagName = args.shift();
	var tag = $('<' + tagName +'></' + tagName + '>'); 
	$.each(args, function(i, content) { !content ? '' : (content.length && typeof(content) === 'object' ? $.each(content, function(x, y){tag.append(y)}) : tag.append(content)) });
	return tag;
}

function orphanTag(tag) {
	return $('<' + tag + '/>');
}

Array.prototype.contains = function(val) {
	for(var l = 0, l = this.length, n = 0; n < l; n++) {
		if(this[n] == val) {
			return true; 
		}
	}
	return false;
}

Array.prototype.chunk = function(s) {
    for(var x, i = 0, c = -1, l = this.length, n = []; i < l; i++)
        (x = i % s) ? n[c][x] = this[i] : n[++c] = [this[i]];
    return n;
}

Array.prototype.reduceToField = function(field) {
	var obj = {};
	for(var x = 0, l = this.length; x < l; x++) {
		obj[this[x][field]] = this[x][field];
	}
	return obj;
}

Array.prototype.reduceTo = function(field) {
	return $.map(this, function(row) { return row[field] });
}

Array.prototype.castAsInt = function() {
	return $.map(this, function(item) { return parseInt(item) });
}


function objectKeys(obj) {
	var a = [];
	$.each(obj, function(k){ a.push(k) });
	return a;
};

function objectValues(obj) {
	var a = [];
	$.each(obj, function(k, v) { a.push(v) });
	return a;	
};
