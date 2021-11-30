var inorderTraversal = (root) => {
    if (!root) return [];
    
    let left = root.left ? inorderTraversal(root.left) : [];
    let right = root.right ? inorderTraversal(root.right) : [];
    let result = [...left, root.val, ...right];

    return result;
}